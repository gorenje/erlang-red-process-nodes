module.exports = function (RED) {
  function ConfigerlconfigFunctionality(config) {
    RED.nodes.createNode(this, config)
  }
  
  RED.nodes.registerType('erlconfigCfg', ConfigerlconfigFunctionality);

  RED.httpAdmin.get("/erlprocess/processes", (req, res) => {
      try {
        if (req.body) {
          if ( req.query.by == "links") {
            res.send({ data: { processes: [
    {
        "name": "init",
        "parent": "<0.0.0>",
        "pid": "<0.0.0>",
        "status": "waiting"
    },
    {
        "name": "erts_code_purger",
        "parent": "<0.1.0>",
        "pid": "<0.1.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.2.0>",
        "pid": "<0.2.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.3.0>",
        "pid": "<0.3.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.4.0>",
        "pid": "<0.4.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.5.0>",
        "pid": "<0.5.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.6.0>",
        "pid": "<0.6.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.7.0>",
        "pid": "<0.7.0>",
        "status": "waiting"
    },
    {
        "name": "socket_registry",
        "parent": "<0.8.0>",
        "pid": "<0.8.0>",
        "status": "waiting"
    },
    {
        "name": "rebar_agent",
        "parent": "<0.0.0>",
        "pid": "<0.10.0>",
        "status": "waiting"
    },
    {
        "name": "erl_prim_loader",
        "parent": "<0.0.0>",
        "pid": "<0.11.0>",
        "status": "waiting"
    },
    {
        "name": "logger",
        "parent": "<0.0.0>",
        "pid": "<0.43.0>",
        "status": "waiting"
    },
    {
        "name": "application_controller",
        "parent": "<0.0.0>",
        "pid": "<0.45.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.45.0>",
        "pid": "<0.46.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.46.0>",
        "pid": "<0.47.0>",
        "status": "waiting"
    },
    {
        "name": "kernel_sup",
        "parent": "<0.47.0>",
        "pid": "<0.49.0>",
        "status": "waiting"
    },
    {
        "name": "code_server",
        "parent": "<0.49.0>",
        "pid": "<0.50.0>",
        "status": "waiting"
    },
    {
        "name": "standard_error_sup",
        "parent": "<0.49.0>",
        "pid": "<0.51.0>",
        "status": "waiting"
    },
    {
        "name": "standard_error",
        "parent": "<0.51.0>",
        "pid": "<0.52.0>",
        "status": "waiting"
    },
    {
        "name": "file_server_2",
        "parent": "<0.49.0>",
        "pid": "<0.53.0>",
        "status": "waiting"
    },
    {
        "name": "inet_db",
        "parent": "<0.49.0>",
        "pid": "<0.55.0>",
        "status": "waiting"
    },
    {
        "name": "rex",
        "parent": "<0.49.0>",
        "pid": "<0.57.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.58.0>",
        "pid": "<0.58.0>",
        "status": "waiting"
    },
    {
        "name": "global_name_server",
        "parent": "<0.49.0>",
        "pid": "<0.59.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.59.0>",
        "pid": "<0.60.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.59.0>",
        "pid": "<0.61.0>",
        "status": "waiting"
    },
    {
        "name": "global_group",
        "parent": "<0.49.0>",
        "pid": "<0.62.0>",
        "status": "waiting"
    },
    {
        "name": "global_group_check",
        "parent": "<0.62.0>",
        "pid": "<0.63.0>",
        "status": "waiting"
    },
    {
        "name": "erl_signal_server",
        "parent": "<0.49.0>",
        "pid": "<0.64.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.49.0>",
        "pid": "<0.65.0>",
        "status": "waiting"
    },
    {
        "name": "user_drv",
        "parent": "<0.68.0>",
        "pid": "<0.66.0>",
        "status": "waiting"
    },
    {
        "name": "user_drv_writer",
        "parent": "<0.66.0>",
        "pid": "<0.68.0>",
        "status": "waiting"
    },
    {
        "name": "user_drv_reader",
        "parent": "<0.66.0>",
        "pid": "<0.69.0>",
        "status": "waiting"
    },
    {
        "name": "user",
        "parent": "<0.65.0>",
        "pid": "<0.70.0>",
        "status": "waiting"
    },
    {
        "name": "logger_sup",
        "parent": "<0.49.0>",
        "pid": "<0.71.0>",
        "status": "waiting"
    },
    {
        "name": "logger_handler_watcher",
        "parent": "<0.71.0>",
        "pid": "<0.72.0>",
        "status": "waiting"
    },
    {
        "name": "logger_proxy",
        "parent": "<0.71.0>",
        "pid": "<0.73.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.49.0>",
        "pid": "<0.74.0>",
        "status": "waiting"
    },
    {
        "name": "kernel_refc",
        "parent": "<0.49.0>",
        "pid": "<0.75.0>",
        "status": "waiting"
    },
    {
        "name": "kernel_safe_sup",
        "parent": "<0.49.0>",
        "pid": "<0.76.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.45.0>",
        "pid": "<0.82.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.82.0>",
        "pid": "<0.83.0>",
        "status": "waiting"
    },
    {
        "name": "logger_std_h_ssl_handler",
        "parent": "<0.71.0>",
        "pid": "<0.85.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.85.0>",
        "pid": "<0.86.0>",
        "status": "waiting"
    },
    {
        "name": "ssl_sup",
        "parent": "<0.83.0>",
        "pid": "<0.87.0>",
        "status": "waiting"
    },
    {
        "name": "ssl_admin_sup",
        "parent": "<0.87.0>",
        "pid": "<0.88.0>",
        "status": "waiting"
    },
    {
        "name": "ssl_pem_cache",
        "parent": "<0.88.0>",
        "pid": "<0.89.0>",
        "status": "waiting"
    },
    {
        "name": "ssl_manager",
        "parent": "<0.88.0>",
        "pid": "<0.90.0>",
        "status": "waiting"
    },
    {
        "name": "tls_client_ticket_store",
        "parent": "<0.88.0>",
        "pid": "<0.91.0>",
        "status": "waiting"
    },
    {
        "name": "ssl_connection_sup",
        "parent": "<0.87.0>",
        "pid": "<0.92.0>",
        "status": "waiting"
    },
    {
        "name": "tls_sup",
        "parent": "<0.92.0>",
        "pid": "<0.93.0>",
        "status": "waiting"
    },
    {
        "name": "tls_connection_sup",
        "parent": "<0.93.0>",
        "pid": "<0.94.0>",
        "status": "waiting"
    },
    {
        "name": "tls_server_sup",
        "parent": "<0.93.0>",
        "pid": "<0.95.0>",
        "status": "waiting"
    },
    {
        "name": "ssl_listen_tracker_sup",
        "parent": "<0.95.0>",
        "pid": "<0.96.0>",
        "status": "waiting"
    },
    {
        "name": "tls_server_session_ticket_sup",
        "parent": "<0.95.0>",
        "pid": "<0.97.0>",
        "status": "waiting"
    },
    {
        "name": "ssl_server_session_cache_sup",
        "parent": "<0.95.0>",
        "pid": "<0.98.0>",
        "status": "waiting"
    },
    {
        "name": "ssl_upgrade_server_session_cache_sup",
        "parent": "<0.95.0>",
        "pid": "<0.99.0>",
        "status": "waiting"
    },
    {
        "name": "dtls_sup",
        "parent": "<0.92.0>",
        "pid": "<0.100.0>",
        "status": "waiting"
    },
    {
        "name": "dtls_connection_sup",
        "parent": "<0.100.0>",
        "pid": "<0.101.0>",
        "status": "waiting"
    },
    {
        "name": "dtls_server_sup",
        "parent": "<0.100.0>",
        "pid": "<0.102.0>",
        "status": "waiting"
    },
    {
        "name": "dtls_listener_sup",
        "parent": "<0.102.0>",
        "pid": "<0.103.0>",
        "status": "waiting"
    },
    {
        "name": "dtls_server_session_cache_sup",
        "parent": "<0.102.0>",
        "pid": "<0.104.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.45.0>",
        "pid": "<0.105.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.105.0>",
        "pid": "<0.106.0>",
        "status": "waiting"
    },
    {
        "name": "inets_sup",
        "parent": "<0.106.0>",
        "pid": "<0.107.0>",
        "status": "waiting"
    },
    {
        "name": "httpc_sup",
        "parent": "<0.107.0>",
        "pid": "<0.108.0>",
        "status": "waiting"
    },
    {
        "name": "httpc_profile_sup",
        "parent": "<0.108.0>",
        "pid": "<0.109.0>",
        "status": "waiting"
    },
    {
        "name": "httpc_manager",
        "parent": "<0.109.0>",
        "pid": "<0.110.0>",
        "status": "waiting"
    },
    {
        "name": "httpc_handler_sup",
        "parent": "<0.108.0>",
        "pid": "<0.111.0>",
        "status": "waiting"
    },
    {
        "name": "httpd_sup",
        "parent": "<0.107.0>",
        "pid": "<0.112.0>",
        "status": "waiting"
    },
    {
        "name": "httpc_rebar",
        "parent": "<0.109.0>",
        "pid": "<0.113.0>",
        "status": "waiting"
    },
    {
        "name": "disk_log_sup",
        "parent": "<0.76.0>",
        "pid": "<0.124.0>",
        "status": "waiting"
    },
    {
        "name": "disk_log_server",
        "parent": "<0.76.0>",
        "pid": "<0.125.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.45.0>",
        "pid": "<0.537.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.537.0>",
        "pid": "<0.538.0>",
        "status": "waiting"
    },
    {
        "name": "elixir_sup",
        "parent": "<0.538.0>",
        "pid": "<0.539.0>",
        "status": "waiting"
    },
    {
        "name": "elixir_config",
        "parent": "<0.539.0>",
        "pid": "<0.540.0>",
        "status": "waiting"
    },
    {
        "name": "elixir_code_server",
        "parent": "<0.539.0>",
        "pid": "<0.541.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.45.0>",
        "pid": "<0.542.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.542.0>",
        "pid": "<0.543.0>",
        "status": "waiting"
    },
    {
        "name": "Elixir.Logger.Supervisor",
        "parent": "<0.543.0>",
        "pid": "<0.545.0>",
        "status": "waiting"
    },
    {
        "name": "logger_std_h_default",
        "parent": "<0.71.0>",
        "pid": "<0.547.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.547.0>",
        "pid": "<0.548.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.45.0>",
        "pid": "<0.549.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.549.0>",
        "pid": "<0.550.0>",
        "status": "waiting"
    },
    {
        "name": "Elixir.Mix.Supervisor",
        "parent": "<0.550.0>",
        "pid": "<0.551.0>",
        "status": "waiting"
    },
    {
        "name": "Elixir.Mix.Sync.PubSub",
        "parent": "<0.551.0>",
        "pid": "<0.552.0>",
        "status": "waiting"
    },
    {
        "name": "Elixir.Mix.State",
        "parent": "<0.551.0>",
        "pid": "<0.553.0>",
        "status": "waiting"
    },
    {
        "name": "Elixir.Mix.TasksServer",
        "parent": "<0.551.0>",
        "pid": "<0.554.0>",
        "status": "waiting"
    },
    {
        "name": "Elixir.Mix.ProjectStack",
        "parent": "<0.551.0>",
        "pid": "<0.555.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.557.0>",
        "pid": "<0.557.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.558.0>",
        "pid": "<0.558.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.559.0>",
        "pid": "<0.559.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.560.0>",
        "pid": "<0.560.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.561.0>",
        "pid": "<0.561.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.562.0>",
        "pid": "<0.562.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.563.0>",
        "pid": "<0.563.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.564.0>",
        "pid": "<0.564.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.565.0>",
        "pid": "<0.565.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.566.0>",
        "pid": "<0.566.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.567.0>",
        "pid": "<0.567.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.568.0>",
        "pid": "<0.568.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.569.0>",
        "pid": "<0.569.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.570.0>",
        "pid": "<0.570.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.571.0>",
        "pid": "<0.571.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.572.0>",
        "pid": "<0.572.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.573.0>",
        "pid": "<0.573.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.574.0>",
        "pid": "<0.574.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.575.0>",
        "pid": "<0.575.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.576.0>",
        "pid": "<0.576.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.577.0>",
        "pid": "<0.577.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.578.0>",
        "pid": "<0.578.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.579.0>",
        "pid": "<0.579.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.580.0>",
        "pid": "<0.580.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.581.0>",
        "pid": "<0.581.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.582.0>",
        "pid": "<0.582.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.583.0>",
        "pid": "<0.583.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.584.0>",
        "pid": "<0.584.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.585.0>",
        "pid": "<0.585.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.586.0>",
        "pid": "<0.586.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.587.0>",
        "pid": "<0.587.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.588.0>",
        "pid": "<0.588.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.590.0>",
        "pid": "<0.590.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.591.0>",
        "pid": "<0.591.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.592.0>",
        "pid": "<0.592.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.593.0>",
        "pid": "<0.593.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.594.0>",
        "pid": "<0.594.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.595.0>",
        "pid": "<0.595.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.596.0>",
        "pid": "<0.596.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.597.0>",
        "pid": "<0.597.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.598.0>",
        "pid": "<0.598.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.599.0>",
        "pid": "<0.599.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.600.0>",
        "pid": "<0.600.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.601.0>",
        "pid": "<0.601.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.602.0>",
        "pid": "<0.602.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.603.0>",
        "pid": "<0.603.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.604.0>",
        "pid": "<0.604.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.605.0>",
        "pid": "<0.605.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.606.0>",
        "pid": "<0.606.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.607.0>",
        "pid": "<0.607.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.608.0>",
        "pid": "<0.608.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.609.0>",
        "pid": "<0.609.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.610.0>",
        "pid": "<0.610.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.611.0>",
        "pid": "<0.611.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.612.0>",
        "pid": "<0.612.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.613.0>",
        "pid": "<0.613.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.614.0>",
        "pid": "<0.614.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.615.0>",
        "pid": "<0.615.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.616.0>",
        "pid": "<0.616.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.617.0>",
        "pid": "<0.617.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.618.0>",
        "pid": "<0.618.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.619.0>",
        "pid": "<0.619.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.620.0>",
        "pid": "<0.620.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.621.0>",
        "pid": "<0.621.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.623.0>",
        "pid": "<0.623.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.624.0>",
        "pid": "<0.624.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.625.0>",
        "pid": "<0.625.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.626.0>",
        "pid": "<0.626.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.627.0>",
        "pid": "<0.627.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.628.0>",
        "pid": "<0.628.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.629.0>",
        "pid": "<0.629.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.630.0>",
        "pid": "<0.630.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.631.0>",
        "pid": "<0.631.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.632.0>",
        "pid": "<0.632.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.633.0>",
        "pid": "<0.633.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.634.0>",
        "pid": "<0.634.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.635.0>",
        "pid": "<0.635.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.636.0>",
        "pid": "<0.636.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.637.0>",
        "pid": "<0.637.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.638.0>",
        "pid": "<0.638.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.639.0>",
        "pid": "<0.639.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.640.0>",
        "pid": "<0.640.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.641.0>",
        "pid": "<0.641.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.642.0>",
        "pid": "<0.642.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.643.0>",
        "pid": "<0.643.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.644.0>",
        "pid": "<0.644.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.645.0>",
        "pid": "<0.645.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.646.0>",
        "pid": "<0.646.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.647.0>",
        "pid": "<0.647.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.648.0>",
        "pid": "<0.648.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.649.0>",
        "pid": "<0.649.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.650.0>",
        "pid": "<0.650.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.651.0>",
        "pid": "<0.651.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.652.0>",
        "pid": "<0.652.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.653.0>",
        "pid": "<0.653.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.654.0>",
        "pid": "<0.654.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.656.0>",
        "pid": "<0.656.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.657.0>",
        "pid": "<0.657.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.658.0>",
        "pid": "<0.658.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.659.0>",
        "pid": "<0.659.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.660.0>",
        "pid": "<0.660.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.661.0>",
        "pid": "<0.661.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.662.0>",
        "pid": "<0.662.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.663.0>",
        "pid": "<0.663.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.664.0>",
        "pid": "<0.664.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.665.0>",
        "pid": "<0.665.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.666.0>",
        "pid": "<0.666.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.667.0>",
        "pid": "<0.667.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.668.0>",
        "pid": "<0.668.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.669.0>",
        "pid": "<0.669.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.670.0>",
        "pid": "<0.670.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.671.0>",
        "pid": "<0.671.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.672.0>",
        "pid": "<0.672.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.673.0>",
        "pid": "<0.673.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.674.0>",
        "pid": "<0.674.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.675.0>",
        "pid": "<0.675.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.676.0>",
        "pid": "<0.676.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.677.0>",
        "pid": "<0.677.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.678.0>",
        "pid": "<0.678.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.679.0>",
        "pid": "<0.679.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.680.0>",
        "pid": "<0.680.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.681.0>",
        "pid": "<0.681.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.682.0>",
        "pid": "<0.682.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.683.0>",
        "pid": "<0.683.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.684.0>",
        "pid": "<0.684.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.685.0>",
        "pid": "<0.685.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.686.0>",
        "pid": "<0.686.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.687.0>",
        "pid": "<0.687.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.689.0>",
        "pid": "<0.689.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.690.0>",
        "pid": "<0.690.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.691.0>",
        "pid": "<0.691.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.692.0>",
        "pid": "<0.692.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.693.0>",
        "pid": "<0.693.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.694.0>",
        "pid": "<0.694.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.695.0>",
        "pid": "<0.695.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.696.0>",
        "pid": "<0.696.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.697.0>",
        "pid": "<0.697.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.698.0>",
        "pid": "<0.698.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.699.0>",
        "pid": "<0.699.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.700.0>",
        "pid": "<0.700.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.701.0>",
        "pid": "<0.701.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.702.0>",
        "pid": "<0.702.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.703.0>",
        "pid": "<0.703.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.704.0>",
        "pid": "<0.704.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.705.0>",
        "pid": "<0.705.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.706.0>",
        "pid": "<0.706.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.707.0>",
        "pid": "<0.707.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.708.0>",
        "pid": "<0.708.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.709.0>",
        "pid": "<0.709.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.710.0>",
        "pid": "<0.710.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.711.0>",
        "pid": "<0.711.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.712.0>",
        "pid": "<0.712.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.713.0>",
        "pid": "<0.713.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.714.0>",
        "pid": "<0.714.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.715.0>",
        "pid": "<0.715.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.716.0>",
        "pid": "<0.716.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.717.0>",
        "pid": "<0.717.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.718.0>",
        "pid": "<0.718.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.719.0>",
        "pid": "<0.719.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.720.0>",
        "pid": "<0.720.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.722.0>",
        "pid": "<0.722.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.723.0>",
        "pid": "<0.723.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.724.0>",
        "pid": "<0.724.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.725.0>",
        "pid": "<0.725.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.726.0>",
        "pid": "<0.726.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.727.0>",
        "pid": "<0.727.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.728.0>",
        "pid": "<0.728.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.729.0>",
        "pid": "<0.729.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.730.0>",
        "pid": "<0.730.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.731.0>",
        "pid": "<0.731.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.732.0>",
        "pid": "<0.732.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.733.0>",
        "pid": "<0.733.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.734.0>",
        "pid": "<0.734.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.735.0>",
        "pid": "<0.735.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.736.0>",
        "pid": "<0.736.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.737.0>",
        "pid": "<0.737.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.738.0>",
        "pid": "<0.738.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.739.0>",
        "pid": "<0.739.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.740.0>",
        "pid": "<0.740.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.741.0>",
        "pid": "<0.741.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.742.0>",
        "pid": "<0.742.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.743.0>",
        "pid": "<0.743.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.744.0>",
        "pid": "<0.744.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.745.0>",
        "pid": "<0.745.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.746.0>",
        "pid": "<0.746.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.747.0>",
        "pid": "<0.747.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.748.0>",
        "pid": "<0.748.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.749.0>",
        "pid": "<0.749.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.750.0>",
        "pid": "<0.750.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.751.0>",
        "pid": "<0.751.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.752.0>",
        "pid": "<0.752.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.753.0>",
        "pid": "<0.753.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.66.0>",
        "pid": "<0.800.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.800.0>",
        "pid": "<0.801.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.45.0>",
        "pid": "<0.802.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.802.0>",
        "pid": "<0.803.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.801.0>",
        "pid": "<0.804.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.801.0>",
        "pid": "<0.805.0>",
        "status": "waiting"
    },
    {
        "name": "ranch_sup",
        "parent": "<0.803.0>",
        "pid": "<0.806.0>",
        "status": "waiting"
    },
    {
        "name": "ranch_server",
        "parent": "<0.806.0>",
        "pid": "<0.807.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.45.0>",
        "pid": "<0.808.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.808.0>",
        "pid": "<0.809.0>",
        "status": "waiting"
    },
    {
        "name": "cowboy_sup",
        "parent": "<0.809.0>",
        "pid": "<0.810.0>",
        "status": "waiting"
    },
    {
        "name": "cowboy_clock",
        "parent": "<0.810.0>",
        "pid": "<0.811.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.45.0>",
        "pid": "<0.812.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.812.0>",
        "pid": "<0.813.0>",
        "status": "waiting"
    },
    {
        "name": "erlang_red_sup",
        "parent": "<0.813.0>",
        "pid": "<0.814.0>",
        "status": "waiting"
    },
    {
        "name": "pg",
        "parent": "<0.814.0>",
        "pid": "<0.815.0>",
        "status": "waiting"
    },
    {
        "name": "ered_flow_store_server",
        "parent": "<0.814.0>",
        "pid": "<0.816.0>",
        "status": "waiting"
    },
    {
        "name": "ered_ws_event_exchange",
        "parent": "<0.814.0>",
        "pid": "<0.817.0>",
        "status": "waiting"
    },
    {
        "name": "ered_error_store",
        "parent": "<0.814.0>",
        "pid": "<0.818.0>",
        "status": "waiting"
    },
    {
        "name": "ered_unittest_engine",
        "parent": "<0.814.0>",
        "pid": "<0.819.0>",
        "status": "waiting"
    },
    {
        "name": "ered_config_store",
        "parent": "<0.814.0>",
        "pid": "<0.820.0>",
        "status": "waiting"
    },
    {
        "name": "ered_csv_parser_store",
        "parent": "<0.814.0>",
        "pid": "<0.821.0>",
        "status": "waiting"
    },
    {
        "name": "ered_compute_engine",
        "parent": "<0.814.0>",
        "pid": "<0.822.0>",
        "status": "waiting"
    },
    {
        "name": "ered_msgtracer_manager",
        "parent": "<0.814.0>",
        "pid": "<0.823.0>",
        "status": "waiting"
    },
    {
        "name": "ered_erlmodule_exchange",
        "parent": "<0.814.0>",
        "pid": "<0.824.0>",
        "status": "waiting"
    },
    {
        "name": "ered_tcp_manager",
        "parent": "<0.814.0>",
        "pid": "<0.825.0>",
        "status": "waiting"
    },
    {
        "name": "ered_runtime_manager",
        "parent": "<0.814.0>",
        "pid": "<0.826.0>",
        "status": "waiting"
    },
    {
        "name": "ered_capture_io_exchange",
        "parent": "<0.814.0>",
        "pid": "<0.828.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.806.0>",
        "pid": "<0.829.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.829.0>",
        "pid": "<0.830.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.829.0>",
        "pid": "<0.831.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.831.0>",
        "pid": "<0.832.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.831.0>",
        "pid": "<0.833.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.831.0>",
        "pid": "<0.834.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.831.0>",
        "pid": "<0.835.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.831.0>",
        "pid": "<0.836.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.831.0>",
        "pid": "<0.837.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.831.0>",
        "pid": "<0.838.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.831.0>",
        "pid": "<0.839.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.831.0>",
        "pid": "<0.840.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.831.0>",
        "pid": "<0.841.0>",
        "status": "waiting"
    },
    {
        "name": "ered_webserver",
        "parent": "<0.814.0>",
        "pid": "<0.842.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.10.0>",
        "pid": "<0.843.0>",
        "status": "waiting"
    },
    {
        "name": "ws8143d8",
        "parent": "<0.830.0>",
        "pid": "<0.844.0>",
        "status": "waiting"
    },
    {
        "name": "capio_grp_ldr_ws8143d8",
        "parent": "<0.828.0>",
        "pid": "<0.858.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.1073.0>",
        "pid": "<0.1073.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.1074.0>",
        "pid": "<0.1074.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.1075.0>",
        "pid": "<0.1075.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.1076.0>",
        "pid": "<0.1076.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.1077.0>",
        "pid": "<0.1077.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.1078.0>",
        "pid": "<0.1078.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.1079.0>",
        "pid": "<0.1079.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.1080.0>",
        "pid": "<0.1080.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.1081.0>",
        "pid": "<0.1081.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.1082.0>",
        "pid": "<0.1082.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.1083.0>",
        "pid": "<0.1083.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.1084.0>",
        "pid": "<0.1084.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.1085.0>",
        "pid": "<0.1085.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.1086.0>",
        "pid": "<0.1086.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.1087.0>",
        "pid": "<0.1087.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.1088.0>",
        "pid": "<0.1088.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.1090.0>",
        "pid": "<0.1090.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.1091.0>",
        "pid": "<0.1091.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.1092.0>",
        "pid": "<0.1092.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.1093.0>",
        "pid": "<0.1093.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.1094.0>",
        "pid": "<0.1094.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.1095.0>",
        "pid": "<0.1095.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.1096.0>",
        "pid": "<0.1096.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.1097.0>",
        "pid": "<0.1097.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.1098.0>",
        "pid": "<0.1098.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.1099.0>",
        "pid": "<0.1099.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.1100.0>",
        "pid": "<0.1100.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.1101.0>",
        "pid": "<0.1101.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.1102.0>",
        "pid": "<0.1102.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.1103.0>",
        "pid": "<0.1103.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.1104.0>",
        "pid": "<0.1104.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.1105.0>",
        "pid": "<0.1105.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.1106.0>",
        "pid": "<0.1106.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.1107.0>",
        "pid": "<0.1107.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.1108.0>",
        "pid": "<0.1108.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.1109.0>",
        "pid": "<0.1109.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.1110.0>",
        "pid": "<0.1110.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.830.0>",
        "pid": "<0.1117.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.1117.0>",
        "pid": "<0.1118.0>",
        "status": "running"
    }
] } }).status(200)
          } else {
            res.send({ data: { processes: [
    {
        "name": "init",
        "parent": "<0.0.0>",
        "pid": "<0.0.0>",
        "status": "waiting"
    },
    {
        "name": "erts_code_purger",
        "parent": "<0.0.0>",
        "pid": "<0.1.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.0.0>",
        "pid": "<0.2.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.0.0>",
        "pid": "<0.3.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.0.0>",
        "pid": "<0.4.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.0.0>",
        "pid": "<0.5.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.0.0>",
        "pid": "<0.6.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.0.0>",
        "pid": "<0.7.0>",
        "status": "waiting"
    },
    {
        "name": "socket_registry",
        "parent": "<0.0.0>",
        "pid": "<0.8.0>",
        "status": "waiting"
    },
    {
        "name": "rebar_agent",
        "parent": "<0.70.0>",
        "pid": "<0.10.0>",
        "status": "waiting"
    },
    {
        "name": "erl_prim_loader",
        "parent": "<0.0.0>",
        "pid": "<0.11.0>",
        "status": "waiting"
    },
    {
        "name": "logger",
        "parent": "<0.0.0>",
        "pid": "<0.43.0>",
        "status": "waiting"
    },
    {
        "name": "application_controller",
        "parent": "<0.70.0>",
        "pid": "<0.45.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.46.0>",
        "pid": "<0.46.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.46.0>",
        "pid": "<0.47.0>",
        "status": "waiting"
    },
    {
        "name": "kernel_sup",
        "parent": "<0.46.0>",
        "pid": "<0.49.0>",
        "status": "waiting"
    },
    {
        "name": "code_server",
        "parent": "<0.46.0>",
        "pid": "<0.50.0>",
        "status": "waiting"
    },
    {
        "name": "standard_error_sup",
        "parent": "<0.46.0>",
        "pid": "<0.51.0>",
        "status": "waiting"
    },
    {
        "name": "standard_error",
        "parent": "<0.46.0>",
        "pid": "<0.52.0>",
        "status": "waiting"
    },
    {
        "name": "file_server_2",
        "parent": "<0.46.0>",
        "pid": "<0.53.0>",
        "status": "waiting"
    },
    {
        "name": "inet_db",
        "parent": "<0.46.0>",
        "pid": "<0.55.0>",
        "status": "waiting"
    },
    {
        "name": "rex",
        "parent": "<0.46.0>",
        "pid": "<0.57.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.46.0>",
        "pid": "<0.58.0>",
        "status": "waiting"
    },
    {
        "name": "global_name_server",
        "parent": "<0.46.0>",
        "pid": "<0.59.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.46.0>",
        "pid": "<0.60.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.46.0>",
        "pid": "<0.61.0>",
        "status": "waiting"
    },
    {
        "name": "global_group",
        "parent": "<0.46.0>",
        "pid": "<0.62.0>",
        "status": "waiting"
    },
    {
        "name": "global_group_check",
        "parent": "<0.46.0>",
        "pid": "<0.63.0>",
        "status": "waiting"
    },
    {
        "name": "erl_signal_server",
        "parent": "<0.46.0>",
        "pid": "<0.64.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.46.0>",
        "pid": "<0.65.0>",
        "status": "waiting"
    },
    {
        "name": "user_drv",
        "parent": "<0.46.0>",
        "pid": "<0.66.0>",
        "status": "waiting"
    },
    {
        "name": "user_drv_writer",
        "parent": "<0.46.0>",
        "pid": "<0.68.0>",
        "status": "waiting"
    },
    {
        "name": "user_drv_reader",
        "parent": "<0.46.0>",
        "pid": "<0.69.0>",
        "status": "waiting"
    },
    {
        "name": "user",
        "parent": "<0.46.0>",
        "pid": "<0.70.0>",
        "status": "waiting"
    },
    {
        "name": "logger_sup",
        "parent": "<0.46.0>",
        "pid": "<0.71.0>",
        "status": "waiting"
    },
    {
        "name": "logger_handler_watcher",
        "parent": "<0.46.0>",
        "pid": "<0.72.0>",
        "status": "waiting"
    },
    {
        "name": "logger_proxy",
        "parent": "<0.46.0>",
        "pid": "<0.73.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.46.0>",
        "pid": "<0.74.0>",
        "status": "waiting"
    },
    {
        "name": "kernel_refc",
        "parent": "<0.46.0>",
        "pid": "<0.75.0>",
        "status": "waiting"
    },
    {
        "name": "kernel_safe_sup",
        "parent": "<0.46.0>",
        "pid": "<0.76.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.82.0>",
        "pid": "<0.82.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.82.0>",
        "pid": "<0.83.0>",
        "status": "waiting"
    },
    {
        "name": "logger_std_h_ssl_handler",
        "parent": "<0.46.0>",
        "pid": "<0.85.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.46.0>",
        "pid": "<0.86.0>",
        "status": "waiting"
    },
    {
        "name": "ssl_sup",
        "parent": "<0.82.0>",
        "pid": "<0.87.0>",
        "status": "waiting"
    },
    {
        "name": "ssl_admin_sup",
        "parent": "<0.82.0>",
        "pid": "<0.88.0>",
        "status": "waiting"
    },
    {
        "name": "ssl_pem_cache",
        "parent": "<0.82.0>",
        "pid": "<0.89.0>",
        "status": "waiting"
    },
    {
        "name": "ssl_manager",
        "parent": "<0.82.0>",
        "pid": "<0.90.0>",
        "status": "waiting"
    },
    {
        "name": "tls_client_ticket_store",
        "parent": "<0.82.0>",
        "pid": "<0.91.0>",
        "status": "waiting"
    },
    {
        "name": "ssl_connection_sup",
        "parent": "<0.82.0>",
        "pid": "<0.92.0>",
        "status": "waiting"
    },
    {
        "name": "tls_sup",
        "parent": "<0.82.0>",
        "pid": "<0.93.0>",
        "status": "waiting"
    },
    {
        "name": "tls_connection_sup",
        "parent": "<0.82.0>",
        "pid": "<0.94.0>",
        "status": "waiting"
    },
    {
        "name": "tls_server_sup",
        "parent": "<0.82.0>",
        "pid": "<0.95.0>",
        "status": "waiting"
    },
    {
        "name": "ssl_listen_tracker_sup",
        "parent": "<0.82.0>",
        "pid": "<0.96.0>",
        "status": "waiting"
    },
    {
        "name": "tls_server_session_ticket_sup",
        "parent": "<0.82.0>",
        "pid": "<0.97.0>",
        "status": "waiting"
    },
    {
        "name": "ssl_server_session_cache_sup",
        "parent": "<0.82.0>",
        "pid": "<0.98.0>",
        "status": "waiting"
    },
    {
        "name": "ssl_upgrade_server_session_cache_sup",
        "parent": "<0.82.0>",
        "pid": "<0.99.0>",
        "status": "waiting"
    },
    {
        "name": "dtls_sup",
        "parent": "<0.82.0>",
        "pid": "<0.100.0>",
        "status": "waiting"
    },
    {
        "name": "dtls_connection_sup",
        "parent": "<0.82.0>",
        "pid": "<0.101.0>",
        "status": "waiting"
    },
    {
        "name": "dtls_server_sup",
        "parent": "<0.82.0>",
        "pid": "<0.102.0>",
        "status": "waiting"
    },
    {
        "name": "dtls_listener_sup",
        "parent": "<0.82.0>",
        "pid": "<0.103.0>",
        "status": "waiting"
    },
    {
        "name": "dtls_server_session_cache_sup",
        "parent": "<0.82.0>",
        "pid": "<0.104.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.105.0>",
        "pid": "<0.105.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.105.0>",
        "pid": "<0.106.0>",
        "status": "waiting"
    },
    {
        "name": "inets_sup",
        "parent": "<0.105.0>",
        "pid": "<0.107.0>",
        "status": "waiting"
    },
    {
        "name": "httpc_sup",
        "parent": "<0.105.0>",
        "pid": "<0.108.0>",
        "status": "waiting"
    },
    {
        "name": "httpc_profile_sup",
        "parent": "<0.105.0>",
        "pid": "<0.109.0>",
        "status": "waiting"
    },
    {
        "name": "httpc_manager",
        "parent": "<0.105.0>",
        "pid": "<0.110.0>",
        "status": "waiting"
    },
    {
        "name": "httpc_handler_sup",
        "parent": "<0.105.0>",
        "pid": "<0.111.0>",
        "status": "waiting"
    },
    {
        "name": "httpd_sup",
        "parent": "<0.105.0>",
        "pid": "<0.112.0>",
        "status": "waiting"
    },
    {
        "name": "httpc_rebar",
        "parent": "<0.105.0>",
        "pid": "<0.113.0>",
        "status": "waiting"
    },
    {
        "name": "disk_log_sup",
        "parent": "<0.46.0>",
        "pid": "<0.124.0>",
        "status": "waiting"
    },
    {
        "name": "disk_log_server",
        "parent": "<0.46.0>",
        "pid": "<0.125.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.537.0>",
        "pid": "<0.537.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.537.0>",
        "pid": "<0.538.0>",
        "status": "waiting"
    },
    {
        "name": "elixir_sup",
        "parent": "<0.537.0>",
        "pid": "<0.539.0>",
        "status": "waiting"
    },
    {
        "name": "elixir_config",
        "parent": "<0.537.0>",
        "pid": "<0.540.0>",
        "status": "waiting"
    },
    {
        "name": "elixir_code_server",
        "parent": "<0.537.0>",
        "pid": "<0.541.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.542.0>",
        "pid": "<0.542.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.542.0>",
        "pid": "<0.543.0>",
        "status": "waiting"
    },
    {
        "name": "Elixir.Logger.Supervisor",
        "parent": "<0.542.0>",
        "pid": "<0.545.0>",
        "status": "waiting"
    },
    {
        "name": "logger_std_h_default",
        "parent": "<0.46.0>",
        "pid": "<0.547.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.46.0>",
        "pid": "<0.548.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.549.0>",
        "pid": "<0.549.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.549.0>",
        "pid": "<0.550.0>",
        "status": "waiting"
    },
    {
        "name": "Elixir.Mix.Supervisor",
        "parent": "<0.549.0>",
        "pid": "<0.551.0>",
        "status": "waiting"
    },
    {
        "name": "Elixir.Mix.Sync.PubSub",
        "parent": "<0.549.0>",
        "pid": "<0.552.0>",
        "status": "waiting"
    },
    {
        "name": "Elixir.Mix.State",
        "parent": "<0.549.0>",
        "pid": "<0.553.0>",
        "status": "waiting"
    },
    {
        "name": "Elixir.Mix.TasksServer",
        "parent": "<0.549.0>",
        "pid": "<0.554.0>",
        "status": "waiting"
    },
    {
        "name": "Elixir.Mix.ProjectStack",
        "parent": "<0.549.0>",
        "pid": "<0.555.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.557.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.558.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.559.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.560.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.561.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.562.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.563.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.564.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.565.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.566.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.567.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.568.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.569.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.570.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.571.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.572.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.573.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.574.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.575.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.576.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.577.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.578.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.579.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.580.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.581.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.582.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.583.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.584.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.585.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.586.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.587.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.588.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.590.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.591.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.592.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.593.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.594.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.595.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.596.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.597.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.598.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.599.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.600.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.601.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.602.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.603.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.604.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.605.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.606.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.607.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.608.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.609.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.610.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.611.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.612.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.613.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.614.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.615.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.616.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.617.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.618.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.619.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.620.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.621.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.623.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.624.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.625.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.626.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.627.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.628.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.629.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.630.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.631.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.632.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.633.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.634.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.635.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.636.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.637.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.638.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.639.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.640.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.641.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.642.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.643.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.644.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.645.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.646.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.647.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.648.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.649.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.650.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.651.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.652.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.653.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.654.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.656.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.657.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.658.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.659.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.660.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.661.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.662.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.663.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.664.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.665.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.666.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.667.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.668.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.669.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.670.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.671.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.672.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.673.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.674.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.675.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.676.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.677.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.678.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.679.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.680.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.681.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.682.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.683.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.684.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.685.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.686.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.687.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.689.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.690.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.691.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.692.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.693.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.694.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.695.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.696.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.697.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.698.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.699.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.700.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.701.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.702.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.703.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.704.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.705.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.706.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.707.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.708.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.709.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.710.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.711.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.712.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.713.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.714.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.715.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.716.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.717.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.718.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.719.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.720.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.722.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.723.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.724.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.725.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.726.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.727.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.728.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.729.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.730.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.731.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.732.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.733.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.734.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.735.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.736.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.737.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.738.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.739.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.740.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.741.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.742.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.743.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.744.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.745.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.746.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.747.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.748.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.749.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.750.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.751.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.752.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.753.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.46.0>",
        "pid": "<0.800.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.800.0>",
        "pid": "<0.801.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.802.0>",
        "pid": "<0.802.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.802.0>",
        "pid": "<0.803.0>",
        "status": "waiting"
    },
    {
        "name": "ranch_sup",
        "parent": "<0.802.0>",
        "pid": "<0.806.0>",
        "status": "waiting"
    },
    {
        "name": "ranch_server",
        "parent": "<0.802.0>",
        "pid": "<0.807.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.808.0>",
        "pid": "<0.808.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.808.0>",
        "pid": "<0.809.0>",
        "status": "waiting"
    },
    {
        "name": "cowboy_sup",
        "parent": "<0.808.0>",
        "pid": "<0.810.0>",
        "status": "waiting"
    },
    {
        "name": "cowboy_clock",
        "parent": "<0.808.0>",
        "pid": "<0.811.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.812.0>",
        "pid": "<0.812.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.812.0>",
        "pid": "<0.813.0>",
        "status": "waiting"
    },
    {
        "name": "erlang_red_sup",
        "parent": "<0.812.0>",
        "pid": "<0.814.0>",
        "status": "waiting"
    },
    {
        "name": "pg",
        "parent": "<0.812.0>",
        "pid": "<0.815.0>",
        "status": "waiting"
    },
    {
        "name": "ered_flow_store_server",
        "parent": "<0.812.0>",
        "pid": "<0.816.0>",
        "status": "waiting"
    },
    {
        "name": "ered_ws_event_exchange",
        "parent": "<0.812.0>",
        "pid": "<0.817.0>",
        "status": "waiting"
    },
    {
        "name": "ered_error_store",
        "parent": "<0.812.0>",
        "pid": "<0.818.0>",
        "status": "waiting"
    },
    {
        "name": "ered_unittest_engine",
        "parent": "<0.812.0>",
        "pid": "<0.819.0>",
        "status": "waiting"
    },
    {
        "name": "ered_config_store",
        "parent": "<0.812.0>",
        "pid": "<0.820.0>",
        "status": "waiting"
    },
    {
        "name": "ered_csv_parser_store",
        "parent": "<0.812.0>",
        "pid": "<0.821.0>",
        "status": "waiting"
    },
    {
        "name": "ered_compute_engine",
        "parent": "<0.812.0>",
        "pid": "<0.822.0>",
        "status": "waiting"
    },
    {
        "name": "ered_msgtracer_manager",
        "parent": "<0.812.0>",
        "pid": "<0.823.0>",
        "status": "waiting"
    },
    {
        "name": "ered_erlmodule_exchange",
        "parent": "<0.812.0>",
        "pid": "<0.824.0>",
        "status": "waiting"
    },
    {
        "name": "ered_tcp_manager",
        "parent": "<0.812.0>",
        "pid": "<0.825.0>",
        "status": "waiting"
    },
    {
        "name": "ered_runtime_manager",
        "parent": "<0.812.0>",
        "pid": "<0.826.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.802.0>",
        "pid": "<0.828.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.802.0>",
        "pid": "<0.829.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.802.0>",
        "pid": "<0.830.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.802.0>",
        "pid": "<0.831.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.802.0>",
        "pid": "<0.832.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.802.0>",
        "pid": "<0.833.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.802.0>",
        "pid": "<0.834.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.802.0>",
        "pid": "<0.835.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.802.0>",
        "pid": "<0.836.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.802.0>",
        "pid": "<0.837.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.802.0>",
        "pid": "<0.838.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.802.0>",
        "pid": "<0.839.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.802.0>",
        "pid": "<0.840.0>",
        "status": "waiting"
    },
    {
        "name": "ered_webserver",
        "parent": "<0.812.0>",
        "pid": "<0.841.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.70.0>",
        "pid": "<0.842.0>",
        "status": "waiting"
    },
    {
        "name": "ws62edc1",
        "parent": "<0.802.0>",
        "pid": "<0.843.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.800.0>",
        "pid": "<0.944.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.812.0>",
        "pid": "<0.1192.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.800.0>",
        "pid": "<0.1194.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.802.0>",
        "pid": "<0.1370.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.812.0>",
        "pid": "<0.1384.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.812.0>",
        "pid": "<0.1385.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.812.0>",
        "pid": "<0.1386.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.812.0>",
        "pid": "<0.1388.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.812.0>",
        "pid": "<0.1390.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.812.0>",
        "pid": "<0.1391.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.812.0>",
        "pid": "<0.1392.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.812.0>",
        "pid": "<0.1393.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.812.0>",
        "pid": "<0.1395.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.812.0>",
        "pid": "<0.1397.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.812.0>",
        "pid": "<0.1398.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.812.0>",
        "pid": "<0.1399.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.812.0>",
        "pid": "<0.1400.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.812.0>",
        "pid": "<0.1401.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.812.0>",
        "pid": "<0.1402.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.812.0>",
        "pid": "<0.1403.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.812.0>",
        "pid": "<0.1404.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.812.0>",
        "pid": "<0.1405.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.812.0>",
        "pid": "<0.1406.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.812.0>",
        "pid": "<0.1407.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.812.0>",
        "pid": "<0.1408.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.812.0>",
        "pid": "<0.1409.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.812.0>",
        "pid": "<0.1410.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.812.0>",
        "pid": "<0.1411.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.812.0>",
        "pid": "<0.1412.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.812.0>",
        "pid": "<0.1413.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.812.0>",
        "pid": "<0.1414.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.812.0>",
        "pid": "<0.1415.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.812.0>",
        "pid": "<0.1416.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.812.0>",
        "pid": "<0.1417.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.812.0>",
        "pid": "<0.1418.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.812.0>",
        "pid": "<0.1419.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.812.0>",
        "pid": "<0.1420.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.812.0>",
        "pid": "<0.1421.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.812.0>",
        "pid": "<0.1425.0>",
        "status": "waiting"
    },
    {
        "name": "",
        "parent": "<0.812.0>",
        "pid": "<0.1426.0>",
        "status": "running"
    },
    {
        "name": "",
        "parent": "<0.812.0>",
        "pid": "<0.1427.0>",
        "status": "waiting"
    }
] } }).status(200)
          }


        } else {
          res.sendStatus(500);
        }
      } catch (err) {
        console.error("ERROR", err)
        res.sendStatus(500);
      }
    }
  )
}