# server/taxi/routing.py

from django.urls import path
from channels.routing import ProtocolTypeRouter, URLRouter

from taxi.middleware import TokenAuthMiddlewareStack
from trips.consumers import TaxiConsumer


application = ProtocolTypeRouter({
    'websocket': TokenAuthMiddlewareStack( # changed
        URLRouter([
            path('taxi/', TaxiConsumer),
        ])
    ),
})