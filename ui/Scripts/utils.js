﻿$.jsonPost = function (url, data, callback, context) {
    var settings = {
        type: "POST",
        contentType: 'application/json; charset=utf-8',
        url: url,
        data: data,
        success: callback,
        dataType: "json"
    };
    if (context) {
        console.log("Adding context to ajax");
        settings.context = context;
    }
    return jQuery.ajax(settings);
};