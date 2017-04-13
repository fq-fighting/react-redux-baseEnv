import React,{Component} from 'react'
import { Table, Popconfirm, Button, DatePicker, message, Menu, Icon } from 'antd';
import Immutable from "immutable"
import Cursor from "immutable/contrib/cursor"
import Lodash from 'lodash';
const SubMenu = Menu.SubMenu;
class HelloWorldComp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:{times:0}
        }
    }
    handleChange(date){
        message.info('您选择的日期是: ' + date.toString());
    }
    handleAdd() {
        console.log(this.state.data);
        let data = Lodash.cloneDeep(this.state.data);
        data.times = data.times + 1;
        console.log(data)
        this.setState({data:data});
        console.log(this.state.data);
    }
    render(){
        const columns = [{
            title: 'Name',
        }, {
            title: 'Actions',
        }, {
            title: 'Age',
        }, {
            title: 'Sex',
        }];
        // let obj = {a:{b:{c:1}}};
        // let data = Immutable.fromJS(obj);
        // console.log(data.setIn(["a","b","c"],2));
        // console.log(data.setIn(["a","b","c"],2).toJS());
        return (<div>
            <Table
                columns={columns}
            />
            <Button loading={true} ></Button>
            <Button onClick={()=>this.handleAdd()} >ADDSTATE</Button>
            <DatePicker onChange={value=>this.handleChange(value)}/>
            {/*// <Menu key="nav1">*/}
            {/*//     <SubMenu key="nav2" title={<span><Icon type="bars"></Icon>主导航</span>}>*/}
                    {/*<Menu.Item key="/apple"><Link to="/apple">苹果</Link></Menu.Item>*/}
                {/*</SubMenu>*/}
            {/*</Menu>*/}
        </div>);
    }
}
export default HelloWorldComp