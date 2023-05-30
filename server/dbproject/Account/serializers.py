from rest_framework import serializers
from .models import TotalMoney,Account,TotalAccountMoney,Income,Expenditure,IncomKind,ExpendKind

class TotalMoneySerializer(serializers.ModelSerializer):
   class Meta:
       model = TotalMoney
       fields = ('id', 'total_money')

class AccountSerializer(serializers.ModelSerializer):
   class Meta:
       model = Account
       fields = ('id', 'bank', 'account_num')

class TotalAccountMoneySerializer(serializers.ModelSerializer):
    class Meta:
        model = TotalAccountMoney
        fields = "__all__"
        
class IncomeSerializer(serializers.ModelSerializer):
   class Meta:
       model = Income
       fields = ('id', 'account_id', 'in_category', 'date')

class ExpenditureSerializer(serializers.ModelSerializer):
   class Meta:
       model = Expenditure
       fields = ('id', 'account_id', 'ex_category', 'date')

class IncomKindSerializer(serializers.ModelSerializer):
   class Meta:
       model = IncomKind
       fields = ('in_category')

class ExpendKindSerializer(serializers.ModelSerializer):
   class Meta:
       model = ExpendKind
       fields = ('ex_category')

