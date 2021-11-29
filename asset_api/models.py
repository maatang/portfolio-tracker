from django.db import models

# Create your models here.


class CryptoCurrency (models.Model):
    ticker = models.TextField()
    priceInUsd = models.TextField()
