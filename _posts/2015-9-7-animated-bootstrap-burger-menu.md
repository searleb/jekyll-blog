---
layout: post
title: Animated Bootstrap Burger Menu
category: blog
tag: [burger menu, bootstrap, custom styles, animation]
---
{% highlight html %}
<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar">
    <span class="sr-only">Toggle navigation</span>
    <span class="icon-bar top-bar"></span>
    <span class="icon-bar middle-bar"></span>
    <span class="icon-bar bottom-bar"></span>
</button>
{% endhighlight %}

{% highlight css %}
.navbar-toggle{
    border: 0px;
    &:hover, &:focus, &:active{
        background-color: $white;
    }
    .icon-bar {
        background-color: $medium-blue;
        width: 22px;
        transition: all 0.2s;
    }
    .top-bar {
        transform: rotate(45deg);
        transform-origin: 10% 10%;
    }
    .middle-bar {
        opacity: 0;
    }
    .bottom-bar {
        transform: rotate(-45deg);
        transform-origin: 10% 90%;
    }
    &.collapsed{
        .top-bar {
            transform: rotate(0deg);
            transform-origin: 10% 10%;
        }
        .middle-bar {
            opacity: 1;
        }
        .bottom-bar {
            transform: rotate(0deg);
            transform-origin: 10% 90%;
        }
    }
}
{% endhighlight %}
