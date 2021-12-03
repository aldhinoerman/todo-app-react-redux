import React, { useEffect } from 'react'
import Header from './components/Header';
import TaskLists from './components/Tasks/TaskLists';
import CompleteTasks from './components/Tasks/CompleteTasks'

import { getInitData } from './store/actions/todo'
import { connect } from 'react-redux'

import './styles/global.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App({ doneList, undoneList, loading, getInitList }) {
  useEffect(() => {
    getInitList()
  }, [])
  
  return (
    <>
      <div className="container">
        <div className="inner">
          <Header />
          <div className="grid col-2-gr">
            <TaskLists loading={loading} data={undoneList} />
            <CompleteTasks loading={loading} data={doneList} />
          </div>
        </div>
      </div>
    </>
  );
}

function mapStateToProps(state) {
  return {
    doneList: state.todoStore.doneData,
    undoneList: state.todoStore.undoneData,
    loading: state.todoStore.loading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getInitList: () => dispatch(getInitData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
