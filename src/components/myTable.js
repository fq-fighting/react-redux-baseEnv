import React from 'react'
import { Table, Popconfirm, Button, DatePicker, message, Menu, Icon } from 'antd';
import Lodash from 'lodash';
class MyTable extends React.Component{
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
            myTable
        </div>);
    }
}
export default MyTable;