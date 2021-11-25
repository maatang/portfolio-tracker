from django.urls import path
from . import views

urlpatterns = [path('hello/', views.sayHello),
               path('cryptoprice/<str:coinTicker>', views.getCryptoPrice)]
