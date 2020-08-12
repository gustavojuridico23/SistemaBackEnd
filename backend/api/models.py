from django.db import models
from datetime import date


# Create your models here.
class Faturamento(models.Model):

    MONTH_CHOICES = (
        ('1', 'Janeiro'),
        ('2', 'Fevereiro'),
        ('3', 'Março'),
        ('4', 'Abril'),
        ('5', 'Maio'),
        ('6', 'Junho'),
        ('7', 'Julho'),
        ('8', 'Agosto'),
        ('9', 'Setembro'),
        ('10', 'Outubro'),
        ('11', 'Novembro'),
        ('12', 'Dezembro'),
    )

    ZONE_CHOICES = (
        ('SP', 'São Paulo'),
        ('MG', 'Minas Gerais'),
        ('NE', 'Nordeste'),
        ('PR', 'Paraná'),
        ('SC', 'Santa Catarina'),
    )

    CITY_CHOICES = (
        (None, '------------------ CIDADES--------------------'),
        (None, '------------------São Paulo--------------------'),
        ('ABC', 'ABC'),
        ('Araçatuba', 'Araçatuba'),
        ('Bauru', 'Bauru'),
        ('Cumbica', 'Cumbica'),
        ('Praia Grande', 'Praia Grande'),
        ('Presidente Prudente', 'Presidente Prudente'),
        ('Ribeirão Preto', 'Ribeirão Preto'),
        ('Santa Barbara', 'Santa Barbara'),
        ('São José do Rio Preto', 'São José do Rio Preto'),
        ('Sorocaba', 'Sorocaba'),
        ('Taubaté', 'Taubaté'),
        ('Valinhos', 'Valinhos'),
        (None, '------------------Minas Gerais--------------------'),
        ('Contagem', 'Contagem'),
        ('Juiz de Fora', 'Juiz de Fora'),
        ('Montes Claros', 'Montes Claros'),
        ('Passos', 'Passos'),
        ('Sapucaí', 'Sapucaí'),
        ('Uberlândia', 'Uberlândia'),
        ('Vale do aço', 'Vale do aço'),
        (None, '------------------Sul--------------------'),
        ('Campo Mourão', 'Campo Mourão'),
        ('Cascavel', 'Cascavel'),
        ('Curitiba', 'Curitiba'),
        ('Francisco Beltrão', 'Francisco Beltrão'),
        ('Gaspar', 'Gaspar'),
        ('Guarapuava', 'Guarapuava'),
        ('Londrina', 'Londrina'),
        ('Maringá', 'Maringá'),
        ('Ponta Grossa', 'Ponta Grossa'),
        (None, '------------------Nordeste--------------------'),
        ('Maceió', 'Maceió'),
        ('Recife', 'Recife'),
    )

    # city = models.CharField(max_length=100, verbose_name='Cidade')
    zone = models.CharField(default='SP', max_length=2, choices=ZONE_CHOICES,
                            blank=False, null=False, verbose_name='Região')
    city = models.CharField(max_length=50, choices=CITY_CHOICES,
                            blank=False, null=False, verbose_name='Cidade')
    month = models.CharField(default=date.today().month, max_length=2,
                             choices=MONTH_CHOICES, blank=False, null=False, verbose_name='Mês')
    value = models.FloatField(verbose_name='Valor')

    def __str__(self):
        return self.city
