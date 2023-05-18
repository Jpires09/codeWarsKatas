function dirReduc(a){
    let wrongDir = []
    for (let i = 0; i < a.length; i++) {
        let j = 0
        switch (a[i]) {
            case 'NORTH':
                
                while((a[j] != 'SOUTH') || (j > a.length)) {
                    j++
                }
                if (a[j] == 'SOUTH') {
                    a.splice(j,1)
                    a.splice(i,1)
                    wrongDir.push('S<->N')
                }
                break;
                case 'SOUTH':
                    while((a[j] != 'NORTH') || (j > a.length)) {
                        j++
                    }
                    if (a[j] == 'NORTH') {
                        a.splice(j,1)
                        a.splice(i,1)
                        wrongDir.push('S<->N')
                    }
                    break;
                    case 'WEST':
                        while((a[j] != 'EAST') || (j > a.length)) {
                            j++
                        }
                        if (a[j] == 'EAST') {
                            a.splice(j,1)
                            a.splice(i,1)
                            wrongDir.push('W<->E')
                        }
                        break;    
                        case 'EAST':
                            while((a[j] != 'WEST') || (j > a.length)) {
                                j++
                            }
                            if (a[j] == 'WEST') {
                                a.splice(j,1)
                                a.splice(i,1)
                                wrongDir.push('W<->E')
                            }
                            break;            
            default:
                break;
        }       
    }
    return wrongDir
}

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]))