---
layout: default
title: Home
nav_order: 1
description: "Just the Docs is a responsive Jekyll theme with built-in search that is easily customizable and hosted on GitHub Pages."
permalink: /
last_modified_date: 2020-04-27T17:54:08+0000
---

# Overview

{: .fs-4 }
Tantra Online is a simple, fast paced 3D MMORPG set in an oriental fantasy world. Set in an oriental environment with 8 playable tribes and a PvP focused gameplay. With a high experience rate and simple combat, Tantra is easy to jump into.

Documentation to manage and administer your own online server.
{: .fs-6 .fw-300 }

[Get started now](#getting-started){: .btn .btn-primary .fs-5 .mb-4 .mb-md-0 .mr-2 } [Get Private Support](https://ko-fi.com/fernandocalmet/commissions){: .btn .fs-5 .mb-4 .mb-md-0 }

---

## Getting started

### Dependencies

- [Windows Server](https://www.microsoft.com/windows-server) 2008 or high
- [SQLServer](https://www.microsoft.com/sql-server) 2008 or high
- [Apache Server](https://httpd.apache.org) / [XAMPP](https://www.apachefriends.org) / [WAMPP](https://www.wampserver.com)

### How to get the required files?

- <b style="color:#FF5E5B">STEP #1</b>: [Register](https://www.ko-fi.com) on ko-fi page.

![register](assets/images/index/register.png)

- <b style="color:#FF5E5B">STEP #2</b>: [Follow](https://ko-fi.com/fernandocalmet) to the developer page.

![follow](assets/images/index/follow.png)

- <b style="color:#FF5E5B">STEP #3</b>: Get your [Commission](https://ko-fi.com/fernandocalmet/commissions) package for Tantra Online for a single payment. This package allows you to access the private repository for Tantra Online + Private support by chat / email with the responsible developer.

![comission](assets/images/index/commission.png)

- <b style="color:#FF5E5B">STEP #4</b>: [Subscribe](https://ko-fi.com/fernandocalmet) with a Coffee monthly to have the commission package privileges active for Tantra Online.

<small style="color:#ED687C">While you have your active subscription the privileges of the commission are maintained. If you no longer want to continue with this privilege you can cancel the payment whenever you want from your paypal page.</small>

![subscribe](assets/images/index/subscribe.png)

### Configure Game Server

- [See configuration options]({{ site.baseurl }}{% link docs/configuration.md %})

---

## About the project

Khanakat is &copy; 2010-{{ "now" | date: "%Y" }} by [Fernando Calmet](https://ko-fi.com/fernandocalmet).

### License

Tantra Online Docs is distributed by an [MIT license](https://github.com/khanakat/TantraOnline/blob/master/LICENSE.txt).

#### Thank you to the contributors of Tantra Online Docs!

<ul class="list-style-none">
{% for contributor in site.github.contributors %}
  <li class="d-inline-block mr-1">
     <a href="{{ contributor.html_url }}"><img src="{{ contributor.avatar_url }}" width="32" height="32" alt="{{ contributor.login }}"/></a>
  </li>
{% endfor %}
</ul>

### Code of Conduct

Tantra Online Docs is committed to fostering a welcoming community.

[View our Code of Conduct](https://github.com/khanakat/TantraOnline/blob/master/CODE_OF_CONDUCT.md) on our GitHub repository.
