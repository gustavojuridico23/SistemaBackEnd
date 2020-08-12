from django.shortcuts import render
from .models import Faturamento
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import FaturamentoSerializer


def soma():
    result = Faturamento.objects.all()
    todos = []
    for item in result:
        if item.month == '8':
            todos.append(item.value)
    return str(sum(todos))


@api_view(['GET'])
def somaMes(request):
	api_soma = {
		'MesAtual': soma(),
		}

	return Response(api_soma)



@api_view(['GET'])
def listDetail(request):
    dados = Faturamento.objects.all()
    serializer = FaturamentoSerializer(dados, many=True)
    print(soma())
    return Response(serializer.data)



