from django.db import models

class TotalMoney(models.Model):
    id = models.AutoField(primary_key=True)
    total_money= models.IntegerField()

class Account(models.Model):
    id = models.AutoField(primary_key=True)
    bank = models.TextField()
    account_num = models.TextField()

class TotalAccountMoney(models.Model):
    id = models.AutoField(primary_key=True)
    bank = models.TextField()
    acc= models.ForeignKey("Account" , on_delete = models.CASCADE)
    image = models.TextField()
    money = models.IntegerField(default=0)
    account_id = models.ForeignKey("Account" , related_name="account_id", on_delete = models.CASCADE)

class Income(models.Model):
    id = models.AutoField(primary_key=True)
    account_id = models.ForeignKey("Account" , on_delete = models.CASCADE)
    in_category = models.ForeignKey("IncomKind", null=True, on_delete = models.SET_NULL)
    money = models.IntegerField(default=0)
    date = models.DateField()

class Expenditure(models.Model):
    id = models.AutoField(primary_key=True)
    account_id = models.ForeignKey("Account" , on_delete = models.CASCADE)
    ex_category = models.ForeignKey("ExpendKind" , null=True, on_delete = models.SET_NULL)
    money = models.IntegerField(default=0)
    date = models.DateField()

class IncomKind(models.Model):
    in_category = models.TextField(primary_key=True)

class ExpendKind(models.Model):
    ex_category = models.TextField(primary_key=True)
