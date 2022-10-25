import {useState} from 'react'

function  HOCPerson(OriginaComponent) {
    function NewComponent () {
      const [money, setMoney] = useState(10);
      const increaseMoney = () => {
          setMoney((pre)=>pre * 2)
      }
      return <OriginaComponent money={money} increaseMoney={increaseMoney} />
    }
    return NewComponent;
}

export default HOCPerson