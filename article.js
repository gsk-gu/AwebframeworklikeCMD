var article=new Array();
article[3]={
    articleName:"a demo",
    articleTag:"demo",
    articleDate:"2019-9-28",
    content:"这是一个博客<img src='img/1.jpg'>测试"
}
article[1]={
    articleName:"A demo",
    articleTag:"dem",
    articleDate:"2019-9-28",
    content:"这是一个博客测试"
}
article[2]={
    articleName:"A demo",
    articleTag:"Java",
    articleDate:"2019-9-28",
    content:"这是一个博客测试"
}
article[0]={
    articleName:"Hash Map",
    articleTag:"Java",
    articleDate:"2018-9-28",
    content:""+
    "<p>"+
    "HashMap是一个用于存储Key-Value键值对的集合，每一个键值对也叫做Entry。这些键值对分散存储在一个数组当中，这个数组就是HashMap的主干。"+
   "</p>"+
   "<p>HashMap数组每一个元素的初始值都是Null</p>"+
    "<img src='img/art/hashmap0.png'>"+
    "<p>对于HashMap我们最常用的是两个方法:Get和Put</p>"+
    "<h5>1.Put方法原理</h5>"+
    "调用Put方法的时候发生了什么?<br><br>"+
   "比如调用<b>hashMap.put(apple,0)</b>,插入一个Key为xiaoming的元素，这个时候，我们就要利用hash函数来确定Entry的插入位置(index): <br><br>"+
    "<b>int index=Hash(apple)</b>;<br><br>"+
    "假设最后计算出的index=2,那么结果如下:<br><br>"+
    
    "<img src='img/art//hashmap1.png'><br><br>"+
    "但是，因为HashMap的长度是有限的，当插入的Entry越来越多时，再完美的Hash函数也会出现index冲撞的问题，比如向下面这样:<br><br>"+
   "<img src='/myimg/hashmap2.png'><br><br>"+
    "这个时候就要用<b>链表</b>来解决.<br><br>"+
    "HashMap数组的每一个元素不止是一个Entry对象，也是一个链表的头结点(每个Entry都对应)，每个Entry对象通过Next指针指向下一个Entry节点。当新来的Entry映射到冲突的数组位置时，只需要插入对应的链表即可:<br>"+
   "<img src='img/art/hashmap3.png'><br>"+
    "需要注意的是，新来的Entry插入链表时，使用的是“头插法”。<br><br>"+
    "<h5>2.Get方法原理</h5>"+
    "调用get方法时，首先会把输入的key做一次hash映射，得到对应的index:<br><br>"+
    "<b>int index=Hash('apple');</b><br><br>"+
    "由于刚才所说的Hash冲突，同一个位置有可能匹配到多个Entry,这时候就需要顺着对应链表的头节点，一个一个向下来找，假设我们要找的key是'apple':<br><br>"+
    "<img src='img/art/hashmap4.png'><br>"+
    "第一步,查看是头结点Entry6,Entry6的key是banana,显然不是我们要找的结果。<br><br>"+
    "第二部,查看next节点Entry1,Entry1的key是apple,就是我们要找的结果。<br><br>"+
    "之所以把Entry6放在头节点，是因为HashMap的发明者认为，后插入的Entry被查找的可能性更大。<br><br>"+
    "这就是HashMap的底层原理<br><br>"+
    "<h5>深入几个问题</h5>"+
    "<b>1.HashMap的默认长度是多少?为什么这么规定?</b><br>"+
    "<b>2.高并发情况下，为什么HashMap可能会出现死锁?</b><br>"+
    "<b>3.Java8中,HashMap有怎样的优化?</b><br><br>"+
    "<h4>问题一:</h4>"+
    "HashMap的默认长度是16,并且每次自动扩展或者手动初始化时，长度必须是2的幂<br><br>"+
    "Problem:&nbsp;为什么是16,有什么特殊意义吗?<br><br>"+
    "Answer: &nbsp;之所以选择16,是为了服务于key映射到index的Hash算法<br><br>"+
    "从Key映射到HashMap的对应位置会用到一个Hash函数：<br><br>"+
    "<b>index=Hash('apple')</b><br><br>"+
    "如何实现一个尽量均匀分布的Hash函数呢?通过利用Key的HashCode来做<b>位</b>运算<br><br>"+
   "通过如下公式进行运算(length是HashMap的长度):<br><br>"+
    "<b>index=HashCode(key) & (length-1)</b><br><br>"+
    "栗子:<br><br>"+
    "1.计算apple的HashCode,结果为十进制3029737,为二进制的1011100011101011101001<br><br>"+
    "2.假设HashMap的长度是16,length-1的结果为15,二进制的1111.<br><br>"+
    "以上两个结果做<b>与</b>运算，10111000111010111011001 & 1111=1001,为十进制9,所以index=9.<br><br>"+
    "也就是说，Hash算法最终得到的index结果，完全取决于HashCode的后几位。<br><br>"+
    "假设HashMap的长度不是<b>2的幂</b>,如为10<br>重复刚才的运算:<br><br>"+
    "HashCode:&nbsp;&nbsp;10 1110 0011 1010 1110 1001<br>"+
    "length-1:&nbsp;&nbsp;-- ---- ---- ---- ---- 1001<br>"+
    "index:&nbsp;&nbsp;------------------------- <span style='color:red'>1001</span><br><br>"+
    "好像没什么问题啊，再换一个HashCode看看<br><br>"+
    "HashCode:&nbsp;&nbsp;10 1110 0011 1010 1110 <b>1111</b><br>"+
    "length-1:&nbsp;&nbsp;-- ---- ---- ---- ---- 1111<br>"+
    "index:-------------------------------------<span style='color:red'>1001</span><br><br>"+
    "是的，虽然HashCode改变了，但运算结果都是1001,也就是说，当HashMao长度不是2的幂的时候，有些index结果出现的机率更大了!有些结果则根本不会出现(0111)<br><br>"+
    "这样，不符合Hash算法分布均匀的原则<br><br>"+
    "如果HashMap的长度为<b>2的幂</b>,length-1的二进制为所有位都是1，这种情况下，index的结果等同于HashCode后几位的值，只要输入的HashCode本身发布均匀，Hash算法就是均匀的."
}