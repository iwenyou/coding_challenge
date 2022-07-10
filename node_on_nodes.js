function BFS(node){
    let nodes = {};

    if(node!== null){
        let queue = [];
        queue.unshift(node);

        while(queue.length !== 0){
            let element = queue.shift();
            if(element.visited){
                continue;
            }else{
                element.visited = true;
            }

            if(element.id in nodes){
                node[element.id]++;
            }else{
                node[element.id] = 1;
            }

            let children =  element.child_node_ids;
            for(let i = 0; i <= children.length; i++){
                queue.push(children[i]);
            }
        }
    }
    console.log(`total number of unique nodes is: ${nodes.length}`);
    console.log(`The node ID which shared the most among all other nodes is ${getMax(nodes)}`);
}

function getMax(nodes){
    let id = '';
    let max = 0;   

    for(const element in nodes){
        if(nodes[element] > max){
            id = element;
            max = nodes[element];
        }
    }
    return id;
}
