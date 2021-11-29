from rest_framework.views import APIView
from django.shortcuts import render
from django.http import HttpResponse
from requests.api import post
import requests
from rest_framework.decorators import action
from .serializers import CryptoCurrencySerializer
from .models import CryptoCurrency
from rest_framework.response import Response
from rest_framework.decorators import api_view


class CryptoPriceView (APIView):
    queryset = CryptoCurrency.objects.all()

    def get(self, request, *args, **kwargs):
        cryptoTicker = self.kwargs.get("coinTicker")
        if cryptoTicker != None:
            usdPair = cryptoTicker + 'USD'
            response = requests.get(
                'https://api.kraken.com/0/public/Ticker?pair=%s' % usdPair)

            resultDictionary = response.json()["result"]
            cryptoPrice = next(iter(resultDictionary.values())).get('a')[0]
            cryptoInfo = CryptoCurrency.objects.create(
                ticker=cryptoTicker, priceInUsd=cryptoPrice)
            serializer = CryptoCurrencySerializer(cryptoInfo)
            return Response(serializer.data)
