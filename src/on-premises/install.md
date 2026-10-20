# Installation

We currently have two supported ways to install BIMData on-premises.

All the relative documentation are inside the git repository for each method of installation.

## Full stack
Our main installation method is our [quickstart Ansible playbook](https://github.com/bimdata/quickstart-onpremise).

It will setup everything you need, and all supported BIMData components, to offer you the same experience as our SaaS service but on your hardware.

## API and process only
We develop a [lighter installer](https://github.com/bimdata/simplified-onpremise), for when you don't need all the BIMData stack, for example, when you will do an integration inside your existing application.

It will only setup our main API, and all the worker to process the uploaded files and will require some manual steps to be usable.
