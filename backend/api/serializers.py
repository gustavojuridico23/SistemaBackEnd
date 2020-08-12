from .models import Faturamento
from rest_framework import serializers

class FaturamentoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Faturamento
        fields = '__all__'