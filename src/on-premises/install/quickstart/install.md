# Installation

We have a [quickstart Ansible playbook](https://github.com/bimdata/quickstart-onpremise/tree/feat/quickstart-creation)
to help you install our applications. This is not intended for production usage,
this is an example of how to deploy the different parts of our product.
You may need to modify it to suit your needs.

## Limitations
 - This project is an example of how to quickly install our applications.
 You may need to do multiple modifications to match your infrastructure
 and your security needs.

 - This project does not support high availability deployment.

## Prerequisites
  - You need to be able to download docker images from the Internet. By default, some images
    come from *Dockerhub* and some from our *private registry*.
  - You need to have *python3* and *python3-venv* on the computer that will run Ansible.
  - Servers must be Debian 10 / 11 with Python3.
  - Servers must be accessible through SSH.
  - You must be sudo / root on the servers.

## Environment
This quickstart uses Ansible to install Docker, Docker-compose, and the Bimdata
applications on the configured servers.
This doesn't support HA deployment currently.

## How to start
### The easy way
We provide a script to simplify the Ansible usage. Keep in mind that it will not let
you completely personalize how you want to install the Bimdata.io apps.

Clone the repository:
```
git clone https://github.com/bimdata/quickstart-onpremise.git
cd quickstart-onpremise
```

You need to ensure that you have `python3` and `python3-venv` installed on your system.

Then you just need to run  the script, it will install the other dependencies and
ask you how you want to install it.
```
./install.sh
```

### The "Ansible" way
Clone the repository:
```
git clone https://github.com/bimdata/quickstart-onpremise.git
cd quickstart-onpremise
```

You will need to install some python dependencies, you may want to do it in a
virtualenv. If this is the case, you need to create it:

```
python3 -m venv venv
source venv/bin/activate
```

Now you need to install the dependencies:
```
pip install -r requirements.txt
```

This playbook comes with an example inventory. The easiest way to start is to copy this inventory and modify the copy:
```
cp -rp inventories/sample inventories/my-own-inventory
```

First, you need to edit the inventory file `inventories/my-own-inventory/inventory.ini`.
There are three groups:
  - `app`: this is where all the web app will be deployed,
  - `db`: this is where all databases will be deployed if you don't use an external Postgres cluster.
  - `workers`: this is where all the workers that process data will be deployed.

Currently, `app` and `db` do not support multiples hosts. This project can't be
use for a fully redundant infrastructure.

Then, you need to modify the variables to match your needs.

When everything is configured, you can deploy:
```
ansible-playbook -i inventories/my-own-inventory/inventory.ini install-bimdata.yml
```

You may need to add options:

| Options          | Effect                    |
|------------------|---------------------------|
| -k               | Prompt for ssh password.  |
| -K               | Prompt for sudo password. |
| --ask-vault-pass | Prompt for vault password |

If you can't use `sudo`, you can check the [Ansible documentation](https://docs.ansible.com/ansible/latest/user_guide/become.html)
on how to configure another way to manage privilege escalation.
