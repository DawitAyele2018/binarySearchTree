//  A tree is a data staracture that consist
// of nodes in parent/child relationship


//  linear linked list - is listed - a special tree
//  tree - non linear


class Node{
    constructor(value){
        this.value = value;
        this.right = null;
        this.left = null;
    }
}
class BST {
    constructor(){
        this.root= null
    }

    // insertion 
    /* 
        accept a value from 
        - creat a node with the given value
        - if this.roor it null set root to be the newNode
        - else   loop through the node 
          create a new variable and assign the root to the new varialbe
          if valeu of the new varaible is lesss than the value of the new node or is null
          set the new variable to be the left node
          else set new varaible is to be the right nodele

     */
    insert(value){
        var node = new Node(value);
        if(!this.root){
            this.root = node;
        }
        else{
            var current = this.root;
            while(true){
                if(current.value === node.value){
                    break;
                }
                else if(node.value< current.value){
                    if(current.left!==null){
                        current = current.left;
                    }else{
                        current.left=node;
                        break;
                    }
                }
                else{
                    if(current.right!==null){
                        current = current.right;
                    }else{
                        current.right=node;
                        break;
                    }
                }
            }
        }

        return this
    }
// find
/* 
    - accept the value
    - if the root is empty, return null
    - if there is a root compare the value of the root with the give value
    - if equal retrun true
    - if greater 
        *check to see if there is a right node
            #if there is a right node 
               . compare the value the right node with the value
               . make this your current node and repreat the process
    - if lessthan
            * check if there is a left node
             # if there is assign the node as a current node and repeat the process
             # if there is return false

*/
    find(value){
        if(!this.root.value === value){return true}
        var current = this.root;
        while(true){
            if(value === current.value){
                return true
            }
           else if(value < current.value){
                if(current.left!== null){
                    current = current.left
                }
                else{
                    return false;
                }
            }
            else{
                if(current.right!== null){
                    current = current.right
                }
                else{
                    return false;
                }
            }
        }
   
    }
}

/*        15
        /    \
       9     19
    /   \   /   \
   7    10 16    21
*/

var bn = new BST()


// Big O of BST

/* 
    Insertion --- O(logn)    } not guaranteed - because it might be one sided tree
    Searching ---- O(logn)   }
    Doubling the number of nodes, you only increase the number of steps to 
    insert/ find by 1. this relationship is log2 relatonship


*/