class vector 
{
  
    constructor(array) 
    {
      this.x = array
    }
  
    length() 
    {
      let y = 0;
      for(let i = 0 ; i < this.x.length ; i++)
      {
        y += this.x[i]*this.x[i]
      }
      return Math.sqrt(y)
    }
  
    neg() 
    {
      for(let i = 0 ; i < this.x.length ; i++)
      {
        this.x[i] = -this.x[i]
      }
      return new vector(this.x)
    }
  
    add(p2) 
    {
      let y = [];
      for(let i = 0 ; i < this.x.length ; i++)
      {
        y[i] = this.x[i] + p2.x[i]
      }
      return new vector(y)
    }
  
    sub(p2) 
    {
      return this.add(p2.neg())
    }
  
    distance(p2)
    {
      return this.sub(p2).length()
    }
  
    dot(p2)
    {
      let y = 0;
      for(let i = 0 ; i < this.x.length ; i++)
      {
        y += this.x[i]*p2.x[i]
      }
      return y
    }

    toString() 
    {
      return this.x.toString()
    }
}
  let p = new vector([2,3])
  let p2 = new vector([1,2])
  console.log('p.length()=', p.toString())
  console.log('p.length()=', p.length())
  console.log('p.add()=',p.add(p2))
  console.log('p.sub()=',p.sub(p2))
  console.log('p.distance()=',p.distance(p2))
  console.log('p.dot()=',p.dot(p2))
