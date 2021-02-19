class ListNode {
    constructor(data) {
        this.data = data
        this.next = null                
    }

    prChain(){
    console.log(this.data)    
    if(this.next){
    this.next.prChain()
    return;
    }
}
}

class LinkedList {
    constructor(head = null) {
        this.head = head
    }
}

head = new ListNode('0')
n1 = new ListNode('1')
n2 = new ListNode('2')
n3 = new ListNode('3')
n4 = new ListNode('4')
n5 = new ListNode('5')


head.next = n1
n1.next = n2
n2.next = n3
n3.next = n4
n4.next = n5


function reverse(head){
    curr = head
    rest = head.next
    while(rest){
 
        temp = rest.next
        rest.next = curr
        curr = rest
        rest = temp
    }
    head.next = null
    return curr
}



function printList(head){
    console.log(head.data)
    while(head.next){
        console.log(head.next.data)
        head = head.next
    }
}

printList(reverse(head))

