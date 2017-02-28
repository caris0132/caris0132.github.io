<?php
/* Smarty version 3.1.30, created on 2017-02-28 13:55:57
  from "G:\xampp\htdocs\caris0132.github.io\IF_FW\app\admin\view\index\login.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.30',
  'unifunc' => 'content_58b51efd1d0628_88267255',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'bb4364134cefa042718ddcaf0c37daa89305b7ae' => 
    array (
      0 => 'G:\\xampp\\htdocs\\caris0132.github.io\\IF_FW\\app\\admin\\view\\index\\login.tpl',
      1 => 1488264943,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_58b51efd1d0628_88267255 (Smarty_Internal_Template $_smarty_tpl) {
?>

<form id="login-form" method="post">
    <div class="alert">
        <?php echo $_smarty_tpl->tpl_vars['data']->value;?>

    </div>
    <div class="input">
        <input type="text" name="User[username]" placeholder="Username" />
    </div>
    <div class="input">
        <input type="password" name="User[password]" placeholder="Password" />
    </div>
    <div class="input">   
        <input type="submit" value="Login" />
    </div>
</form><?php }
}
