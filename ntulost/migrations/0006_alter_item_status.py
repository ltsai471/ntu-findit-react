# Generated by Django 4.0.3 on 2022-04-09 09:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ntulost', '0005_rename_send_account_chatcontext_sendaccount_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='status',
            field=models.CharField(max_length=10),
        ),
    ]