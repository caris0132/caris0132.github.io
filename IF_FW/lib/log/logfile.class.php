<?php
/**
 * summary
 */
class Log
{
    private static $logFile;
    private static $fp;
    public function lfile($path)
    {

        Log::$logFile = $path;
    }
    public static function lread()
    {
        if (!is_resource(Log::$fp)) {
            Log::lopen();
        }
        var_dump(fread(Log::$fp, filesize(Log::$logFile)));
        echo fread(Log::$fp, filesize(Log::$logFile));
    }
    public static function lwrite($message)
    {
        if (!is_resource(Log::$fp)) {
            Log::lopen();
        }
        // define script name
        $script_name = pathinfo($_SERVER['PHP_SELF'], PATHINFO_FILENAME);
        // define current time and suppress E_WARNING if using the system TZ settings
        // (don't forget to set the INI setting date.timezone)
        $time = @date('[d/M/Y:H:i:s]');
        // write current time, script name and message to the log file
        fwrite(Log::$fp, "$time ($script_name) $message" . PHP_EOL);
    }
    public static function lclose()
    {
        fclose(Log::$fp);
    }
    public static function lopen()
    {
        if (strtoupper(substr(PHP_OS, 0, 3)) === 'WIN') {
            $log_file_default = 'c:/php/logfile.txt';

        } else {
            $log_file_default = '/tmp/logfile.txt';
        }
        // define log file from lfile method or use previously set default
        Log::$logFile = Log::$logFile ? Log::$logFile : $log_file_default;
        // open log file for writing only and place file pointer at the end of the file
        // (if the file does not exist, try to create it)
        Log::$fp = fopen(Log::$logFile, 'a') or exit("Can't open $lfile!");
    }
    public static function lclear()
    {
        if (is_resource(Log::$fp)) {
            Log::$lclose();
            unlink(Log::$logFile);
        }
    }
}
