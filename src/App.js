import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchData} from './GetData';
import {Header} from './components/Product/Product'
import {ProductDescription} from './components/Product/Product'
import GraphData from './components/GraphData/GraphData'
import SalesTable from './components/SalesTable/SalesTable'
import './App.css'

const App = () =>{
    const data = useSelector((state) => state.dataFetchReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData());
    }, []);

    const renderData = () =>{
        return (
            <div className='mainContainer'>
                <ProductDescription data={data.productData} />
                <div className='contentContainer'>
                <div className='salesRecords'>
                    <GraphData data={data.productData.sales} />
                    <SalesTable data={data.productData.sales} />
                    </div>
                </div>
            </div>
        );
    };
    return (
        <div className="App">
            <Header/>
            {data.loading ? renderData() : null}
        </div>
    );
}

export default App;
