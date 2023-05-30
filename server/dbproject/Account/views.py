from django.shortcuts import render
from django.shortcuts import render
from rest_framework.response import Response
from .models import Account
from rest_framework.views import APIView
from .serializers import AccountSerializer

from Account import models as AccountModel
from django.db.models import Sum

# Create your views here.
class TotalMoneyInfo(APIView):
    def get(self, request):
        accounts = AccountModel.Account.objects.all()
        accountInfoList = AccountModel.TotalAccountMoney.objects.all()
        accountInfo = {
            'id': 0,
            'kind': '',
            'acc' : '',
            'money':0,
            'check' : False,
            'image' : ''

        }
        print(accounts)

        def sumTotalMoney(account):
            income = AccountModel.Income.objects.filter(account_id = account.id).aggregate(Sum('money'))
            expend = AccountModel.Income.objects.filter(account_id = account.id).aggregate(Sum('money'))
            
            # totalMoney = income + expend

            return income
        
        for index, i in enumerate(accounts): 
            accountInfo.id=i.id
            accountInfo.bank =i.bank
            accountInfo.acc = i.account_num
            accountInfo.image = '@/'+i.bank+'.png'
            accountInfo.money = sumTotalMoney(i)
            accountInfoList.append(accountInfo)

        
        
        serializer = AccountSerializer(accountInfoList, many=True)
        return Response(serializer.data)
    
    