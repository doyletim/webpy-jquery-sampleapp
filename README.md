webpy-jquery-sampleapp
======================

A tutorial web application using web.py and jQuery.

Updated for Python 3.7.x

Changes 15-Aug-2021
---------------------------
**main.py:**

* updated `except` syntax; assign  `e` to result of `Exception` e.g., `Exception as e:`  instead of `Exception, ex:`
* use  `e.args` or `e.message` instead of `ex.__str__()` (depricated) to `print()` abovementioned exception
* use `in` operator instead of`has_key()`(depricated)

**templates/ajaxdropdowns.html**

* use doublequotes(") for `id` attribute values on `select` elements

