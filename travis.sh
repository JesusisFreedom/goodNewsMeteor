#!/bin/sh
curl https://install.meteor.com | /bin/sh
meteor --test --settings=config/test.settings.json --release velocity:METEOR@1.1.0.2_3