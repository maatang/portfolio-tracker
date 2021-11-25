from django.shortcuts import render
from django.http import HttpResponse
import requests

# Create your views here.


def sayHello(request):
    return HttpResponse('Hello World')


def getCryptoPrice(request, coinTicker):
    usdPair = coinTicker + 'USD'
    response = requests.get(
        'https://api.kraken.com/0/public/Ticker?pair=%s' % usdPair)
    return HttpResponse(response)
