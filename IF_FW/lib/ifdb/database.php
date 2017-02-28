<?php
/**
 *
 */
class Ifdb_Database
{
    private $table;
    private $conn;
    private $sql;
    public $maps;
    public function __construct($table = null)
    {
        $this->connect();
        $this->table = $table;
    }
    public function connect()
    {
        try {
            $this->conn = new PDO(
                Ifdb::$config['db']['connectionString'],
                Ifdb::$config['db']['username'],
                Ifdb::$config['db']['password']
            );
            $this->conn->setAttribute(
                PDO::ATTR_ERRMODE,
                PDO::ERRMODE_EXCEPTION
            );
            $this->conn->exec("set character_set_results=utf8");
            $this->conn->query("SET NAMES utf8");
        } catch (PDOException $e) {
            throw new Exception("No connect to database!");

        }
        return $this->conn;
    }

    public function __destruct()
    {
        $this->conn = null;
    }
    public function select($columns = "*")
    {
        if (is_array($columns)) {
            $columns = implode(',', $columns);
            return $this;
        }
        $this->sql .= "select $columns";
    }
    public function from($table)
    {
        $this->sql .= " from $table";
        return $this;
    }
    public function join($table, $on)
    {
        $this->sql .= " join $table on $on";
        return $this;
    }
    public function where($condition)
    {
        $this->sql .= $condition != '' ? $this->sql .= " where $condition" : '';
        return $this;
    }
    public function groupBy($group)
    {
        $this->sql .= " group by $group";
        return $this;
    }
    public function having($having)
    {
        $this->sql .= " having $having";
        return $this;
    }
    public function orderBy($order)
    {
        $this->sql .= " order by $order";
        return $this;
    }
    public function limit($offset, $count)
    {
        $this->sql .= " limit $offset, $count";
        return $this;
    }
    public function execute($param = null)
    {
        try {
            $this->sth = $this->conn->prepare($this->sql);
            $this->sth->execute($param);
        } catch (PDOException $e) {
            throw new Exception("Wrong sql");
            return null;
        }
    }
    public function fetch($fetchMode = PDO::FETCH_OBJ)
    {
        return $this->sth->fetch($fetchMode);
    }
    public function fetchAll($fetchMode = PDO::FETCH_OBJ)
    {
        return $this->sth->fetchAll($fetchMode);
    }

    public function insert($table, $condition = array())
    {
        $columns = array_keys($condition);

        $values = array_values($condition);
        $sql = "insert into {$table}({columns}) values ({values})";
        $sql = str_replace('{columns}', implode(',', $columns), $sql);
        foreach ($columns as $key => &$value) {
            $value = ':' . $value;
        }

        $sql = str_replace('{values}', implode(',', $columns), $sql);
        try {
            $sth = $this->conn->prepare($sql);
            $sth->execute(array_combine($columns, $values));
        } catch (PDOException $e) {
            throw new Exception("Error Processing Request", 1);

        }
    }
    public function update($table, $param = array(), $condition = null)
    {
        try {
            $sql = "update $table set {param}";
            $columns = array_keys($param);
            $values = array_values($param);
            foreach ($columns as $key => &$value) {
                $value = "$value = ?";
            }
            $sql = str_replace('{param}', implode(',', $columns), $sql);
            if ($condition) {
                $sql .= " where $condition";
            }
            $sth = $this->conn->prepare($sql);
            $sth->execute($values);
        } catch (PDOException $e) {
            throw new Exception("Wrong sql");

        }

    }
    public function delete($table, $condition = null, $param = array())
    {
        $sql = "delete from $table ";
        if ($condition) {
            $sql .= " where $condition";
        }
        $sth = $this->conn->prepare($sql);
        $sth->execute($param);
    }
    public function findAll($table = null, $columns = null, $condition = null, $param = null)
    {
        $sql = "select {columns} from {table}";
        if ($table == null) {
            $table = $this->table;
        }
        $sql = str_replace('{table}', $table, $sql);
        if ($columns == null) {
            $columns = "*";
            $sql = str_replace('{columns}', $columns, $sql);
        } else {
            $sql = str_replace('{columns}', implode(',', $columns), $sql);
        }

        if ($condition == null) {
            if ($param != null) {
                $keys = array_keys($param);
                foreach ($keys as $key => &$value) {
                    $value = $value . ':' . $value;
                }
                $sql .= ' where ' . implode(' and ', $keys);
            }

        } else {

        }
        $sth = $this->conn->prepare($sql);
        $sth->execute($param);
        return $sth->fetchAll(PDO::FETCH_OBJ);

    }
    public function find($condition = null, $param = null)
    {
        try {
            if ($this->table) {
                $sql = 'select * from ' . $this->table;
                if ($condition) {
                    $sql .= ' where ' . $condition;
                }
                $sth = $this->conn->prepare($sql);
                $sth->execute($param);
                return $sth->fetch(PDO::FETCH_OBJ);
            } else {
                throw new Exception('Table not found!');
                return false;
            }
        } catch (PDOException $e) {
            throw new Exception('Wrong sql!');
            return false;
        }
    }

}
