from .models import CryptoCurrency
from rest_framework import serializers


class CryptoCurrencySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = CryptoCurrency
        fields = ['ticker', 'priceInUsd']
