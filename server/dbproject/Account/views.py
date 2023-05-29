from django.shortcuts import render
from django.shortcuts import render
from rest_framework.response import Response
from .models import Product
from rest_framework.views import APIView
from .serializers import AccountSerializer

from Account import models as AccountModel

# Create your views here.
class TotalMoneyInfo(APIView):
    def get(self, request):
        accounts = AccountModel.Account.objects.all()
        Income = AccountModel.Income.objects.all()
        Expenditure = AccountModel.Expenditure.objects.all()

        accountInfoList = []
        accountInfo = {
            'id': 0,
            'kind': '',
            'acc' : '',
            'money':0,
            'check' : False,
            'image' : ''

        }
        print(accounts)

        for i in accounts: 
            accountInfo['id']=i.id
            accountInfo['kind']=i.bank
            accountInfo['acc'] = i.account_num
            accountInfo['image'] = '@/'+i.bank+'.png'
            accountInfo['money'] = sumTotalMoney(i)
            accountInfoList.append(accountInfo)

        def sumTotalMoney(account):
            income = AccountModel.Income.filter( account_id = account.id)
            expend = AccountModel.Income.filter(account_id = account.id)
            totalMoney = sum(income.money) - sum(expend.money)

            return totalMoney
        
        serializer = AccountSerializer(queryset, many=True)
        return Response(serializer.data)