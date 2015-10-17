---
layout: post
title: Styling Slick Slider Dots
category: code
tag: [slick, custom styles]
---

{% highlight scss %}
.slick-dots{
  margin-top: 70px;
  padding: 0px;
  li{
    display: inline-block;
    height: 10px;
    width: 10px;
    background-color: $light-grey;
    padding: none;
    margin: 10px;
    border-radius: 10px;
    button{
      display: none;
    }
    &.slick-active{
      background-color: $medium-blue;
    }
  }
}
{% endhighlight %}
