# Generated by Django 4.0.3 on 2022-04-21 04:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ntulost', '0011_itemplace'),
    ]

    operations = [
        migrations.AlterField(
            model_name='chatcontext',
            name='sendDatetime',
            field=models.DateTimeField(null=True),
        ),
    ]