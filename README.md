# same message
with code
```javascript
Sentry.captureMessage('jso')
```
we see in network:
![network same message](img/network-i.png)

we see in sentry :
![sentry same message](img/sentry-i.png)

# different message
with code
```javascript
Sentry.captureMessage('jso'+i++)
```
we see in network:
![network different message](img/network-i++.png)

we see in sentry :
![sentry different message](img/sentry-i++.png)