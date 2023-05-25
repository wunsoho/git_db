# Generated by Django 4.2.1 on 2023-05-24 14:22

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Account',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('bank', models.TextField()),
                ('account_num', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='ExpendKind',
            fields=[
                ('ex_category', models.TextField(primary_key=True, serialize=False)),
            ],
        ),
        migrations.CreateModel(
            name='IncomKind',
            fields=[
                ('in_category', models.TextField(primary_key=True, serialize=False)),
            ],
        ),
        migrations.CreateModel(
            name='TotalMoney',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('total_money', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Income',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('date', models.DateField()),
                ('account_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Account.account')),
                ('in_category', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='Account.incomkind')),
            ],
        ),
        migrations.CreateModel(
            name='Expenditure',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('date', models.DateField()),
                ('account_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Account.account')),
                ('ex_category', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='Account.expendkind')),
            ],
        ),
    ]
