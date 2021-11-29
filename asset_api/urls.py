from django.urls import path, include
from . import views
from rest_framework import routers, serializers, viewsets

router = routers.DefaultRouter()

urlpatterns = [
    path('', include(router.urls)),
    path('cryptoprice/<str:coinTicker>',
         views.CryptoPriceView.as_view(), name="cryptoprice")
]
