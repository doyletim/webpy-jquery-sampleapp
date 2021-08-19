#!/usr/bin/python3
import web
import os
import json
from datetime import datetime
import gviz_api

# to avoid any path issues, "cd" to the web root.
web_root = os.path.abspath(os.path.dirname(__file__))
os.chdir(web_root)

urls = (
    '/', 'home',
    '/dropdown', 'dropdown',
    '/chart', 'chart',
    '/gauge', 'gauge',
    '/getanythingyouwant', 'getanythingyouwant',
    '/getregionsashtml', 'getregionsashtml',
    '/getregionsasjson', 'getregionsasjson'
)
app = web.application(urls, globals())
render = web.template.render('templates', base='base')

class home:
    def GET(self):
        return render.home()
        
class gauge:
    def GET(self):
        x = {
            "kph": 45
        }
        y = json.dumps(x)
        print (y)
        print (type(y))
        return y

class dropdown:
    def GET(self):
        return render.dropdown()

class chart:
    def GET(self):
        return render.chart()

class getregionsasjson:
    def POST(self):
        try:
            country = getAjaxArg("country")

            # something here would populate this as needed
            if country == "USA":
                return json.dumps(["Alabama", "Georgia", "Michigan", "Texas"])       
            if country == "Canada":
                return json.dumps(["Newfoundland", "Manitoba", "Alberta", "France (quebec) :-)"])

        except Exception as e: # except Exception, ex:(depricated) - assign e as object for Exception instead
            print (e.args) # print() already calls str() - use new e object with e.args

class getregionsashtml:
    def POST(self):
        try:
            country = getAjaxArg("country")

            # something here would populate this as needed
            if country == "USA":
                return """
                <option value='Virginia'>Virginia</option>
                <option value='Tennessee'>Tennessee</option>
                """
            if country == "Canada":
                return """
                <option value='Nunavit'>Nunavit</option>
                <option value='Sascatchewan'>Sascatchewan</option>
                """
        except Exception as e: # except Exception, ex:(depricated) - assign e as object for Exception instead
            print (e.args) # print() already calls str() - use new e object with e.args

class getanythingyouwant:
    def POST(self):
        try:
            out = []
            out.append("Current Time is: %s<br>" % datetime.now())
            out.append("""You could do anything you wanted in here.  Full html, go get content from another
            site using urllib, parse an rss feed and format it for your site, etc.
            """)
            return "".join(out)
        except Exception as e: # except Exception, ex:(depricated) - assign e as object for Exception instead
            print (e.args) # print() already calls str() - use new e object with e.args

def getAjaxArg(sArg, sDefault=""):
    #"""Picks out and returns a single value, regardless of GET or POST."""
    try:
        data = web.data()
        dic = None
        if data:
            dic = json.loads(data)
        else:
            # maybe it was a GET?  check web.input()
            dic = dict(web.input())

        if dic:
            if sArg in dic: # has_key() is depricated - use in operator instead
                if dic[sArg]:
                    return dic[sArg]
                else:
                    return sDefault
            else:
                return sDefault
        else:
            return sDefault
    except ValueError:
        raise Exception("getAjaxArg - no JSON arguments to decode. This method required a POST with JSON arguments.")

if __name__ == "__main__":
    app.run()
