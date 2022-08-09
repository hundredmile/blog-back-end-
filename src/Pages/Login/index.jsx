import React,{useState} from 'react'
import 'antd/dist/antd.css'
import {Card,Input,Button,Spin,Space} from 'antd'
import logincss from './index.module.css' 
import {UserOutlined,KeyOutlined} from '@ant-design/icons' 
 
export default function Login() {
  const [userName,setUserName] = useState('')
  const [passWord,setPassWord] = useState('')
  const [isLoading,setIsLoading] = useState(false)

  const checkLogin =()=>{
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 1000);
  }

  return (
    <div className={logincss.login}>
      <Spin tip="Loading..." spinning={isLoading} >
        <Card title="welcome to back" bordered={true} style={{width:400}}>
          <Input 
            id={logincss.userName} 
            size="large" 
            placeholder='请输入用户名' 
            prefix={<UserOutlined style={{color:'rgba(0,0,0,.35)'}}/>} 
            onChange={(e)=>{setUserName(e.target.value)}}
          />
          <br/><br/>
          <Input.Password 
            id={logincss.passWord} 
            size="large" 
            placeholder='请输入密码' 
            prefix={<KeyOutlined  style={{color:'rgba(0,0,0,.35)'}}/>} 
            onChange={(e)=>{setPassWord(e.target.value)}}
          />
          <br/><br/>

          <Button type='primary' size='large' block onClick={checkLogin}>登录</Button>
        </Card>
      </Spin>
    </div>
  )
}
