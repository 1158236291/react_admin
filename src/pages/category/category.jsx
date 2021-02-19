import React, { Component } from 'react'
import { Card, Table, Button, Icon, message, Modal } from 'antd'
import LinkButton from '../../components/link-button'
export default class category extends Component {
    state = { categorys: [], 
        // 一级分类列表 
        subCategorys: [], 
        // 二级分类列表 
        parentId: '0', 
        // 父分类的 ID 
        parentName: '', 
        // 父分类的名称 
        loading: false, 
        // 标识是否正在加载中 
        showStatus: 0,
         // 是否显示对话框 0: 都不显示, 1: 显示添加, 2: 显示更新
        }
    render() {
        const {categorys, subCategorys, parentId, parentName, loading, showStatus} = this.state
        return (
            <Card  > 
            <Table 
            bordered 
            rowKey='_id' 
            dataSource={parentId === '0' ? categorys : subCategorys} 
            columns={this.columns} 
            loading={loading} 
            pagination={{pageSize: 5, showQuickJumper: true, showSizeChanger: true}} />
        <Modal
         title="添加分类" 
         visible={showStatus === 1} 
         > 
         
         </Modal> 
         <Modal 
         title="修改分类" 
         visible={showStatus === 2} 
         
          > 
          </Modal>
        </Card>
        )
    }
}
