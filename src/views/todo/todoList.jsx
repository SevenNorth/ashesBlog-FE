import React,{useEffect, useState} from 'react'
import { Tabs, WhiteSpace, Badge, Card, Popover} from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import { EllipsisOutlined } from '@ant-design/icons';

import './todoList.less'

export default function TodoList(props) {

  const [visible, setVisible] = useState(false)

  const tabs = [
    { title: <Badge>全部</Badge>},
    { title: <Badge>未完成</Badge>},
    { title: <Badge>已完成</Badge>}
  ];

  const renderTabBar=(props)=> {
    return (<Sticky >
      {({ style }) => <div style={{ ...style, zIndex: 1}}><Tabs.DefaultTabBar {...props} /></div>}
    </Sticky>);
  }


  const [currentList, setCurrentList] = useState(<div>all</div>)

  useEffect(()=>{
    computed('全部')
    // eslint-disable-next-line
  },[])

  const onSelect = (opt) => {
    console.log(opt.props);
    setVisible(false);
  };
  const handleVisibleChange = (visible) => {
    console.log(visible)
    setVisible(visible);
  };

  const computed=(status)=>{
    let current
    switch (status) {
      case "全部":
        current=props.todos
        break;
      case "未完成":
        current=props.todos.filter(todo=>!todo.completed)
        break;
      case "已完成":
        current=props.todos.filter(todo=>todo.completed)
        break;
      default:
        break
    }

    const tabContent=(
      <div 
        style={{
          width:"100%"
        }}
        className="test4"
      >
        {
          current.map(todo=>{
            return (
              <div key={todo.id}>
                <Card >
                  <Card.Header
                    title={todo.title}
                    extra={
                      <Popover mask
                        overlayClassName="fortest"
                        overlayStyle={{ color: 'currentColor' }}
                        visible={visible}
                        overlay={[
                        (<Popover.Item key="1" value="special" >切换为{todo.completed?'未':'已'}完成</Popover.Item>),
                          (<Popover.Item key="2" value="special" >编辑</Popover.Item>),
                          (<Popover.Item key="3" value="special" >删除</Popover.Item>),
                        ]}
                        align={{
                          overflow: { adjustY: 0, adjustX: 0 },
                          offset: [-10, 0],
                        }}
                        onVisibleChange={handleVisibleChange}
                        onSelect={onSelect}
                      >
                        <div style={{
                          height: '100%',
                          padding: '0 15px',
                          marginRight: '-15px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent:'flex-end'
                        }}
                        >
                          <EllipsisOutlined 
                            style={{
                              width:"2rem",
                              height:'1rem',
                              border:'2px solid  #108EE9',
                              borderRadius:5
                            }} 
                          />
                        </div>
                      </Popover>
                    }
                  />
                  <Card.Body>
                    <div
                      style={{
                        width:"100%",
                        textAlign:"left",
                        textIndent:"2em"
                      }}
                    >{todo.content}</div>
                  </Card.Body>
                  <Card.Footer 
                    content="创建时间" 
                    extra={<span>{todo.completed?'已':'未'}完成</span>}
                  />
                </Card>
              <WhiteSpace size="lg" />
              </div>
            )
          })
        }
      </div>
    )

    setCurrentList(tabContent)
  }

  return (
    <div
      style={{
        height:"100%"
      }}
      className="test1"
    >
      <StickyContainer className="test2" style={{
        height:"100%"
      }}>
        <Tabs tabs={tabs}
          initialPage={0}
          onChange={(tab, index) => { 
            // console.log('onChange', index, tab); 
            computed(tab.title.props.children)
          }}
          onTabClick={(tab, index) => { 
            // console.log('onTabClick', index, tab); 
            computed(tab.title.props.children)
          }}
          renderTabBar={renderTabBar}
          swipeable={true}
        >
          <div style={{ 
            display: 'flex', 
            alignItems: 'flex-start', 
            justifyContent: 'center', 
            height: '100%', 
            backgroundColor: '#fff' 
          }}
            className="test3"
          >
            {currentList}
          </div>
        </Tabs>
      </StickyContainer>
    </div>
  )
}
