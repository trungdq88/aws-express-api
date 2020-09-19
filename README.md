# aws-express-api
Serverless template with AWS NodeJS Express API

# Development

Install `serverless`

    npm install -g serverless

`cd` to your work directory and create a new project from this template:

    serverless create --template-url https://github.com/trungdq88/aws-express-api --path myService

`cd` to the created directory:

    cd myService
    npm install

Update the lines with "TODO" in `serverless.yml`

See: https://serverless.com/framework/docs/providers/aws/cli-reference/create/

Config your AWS credentials:

    serverless config credentials --provider aws --key AKIAZPR2TKNIC2V5EK7O --secret xxxxxxxxxxxxx

# Create domain

    sls create_domain --stage {prod|dev} # 1 time set up


If you see problem about "region config not found", use the following:

    AWS_REGION=us-east-1 sls create_domain --stage {prod|dev}

# Deploy

    sls deploy --stage {prod|dev}

# Demo

https://template-dev.thesimpleapi.com/hello

https://template.thesimpleapi.com/hello
