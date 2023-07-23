import React, { useEffect, useState } from "react";

import axios from "axios";

export default function Movie() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        let mounted = true;

        if (mounted)
            getData();

        return () => mounted = false;
    }, []);

    async function getData() {
        try {
            const result = await axios({
                method: 'get',
                url: 'http://localhost:3001/movies',
                responseType: 'json'
            });

            setMovies(result.data);
        } catch (e) {
            throw e;
        }
    }

    return (
        <>
            <button onClick={getData}>Refresh</button>
            <ul>
                {movies.map(x => {
                    return <li key={x}>{x}</li>
                })}
            </ul>
        </>
    );


}





// export default class Movie extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             movies: [],
//         };
//         this.loadMovies = this.loadMovies.bind(this);
//     }

//     componentWillMount() {
//         this.loadMovies();
//     }

//     async loadMovies() {
//         const promise = await axios.get("http://localhost:3000/movie");
//         const status = promise.status;
//         if (status === 200) {
//             const data = promise.data;
//             this.setState({ movies: data });
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Movies</h1>
//                 {this.state.books.map((value, index) => { return <h4 key={index}>{value}</h4> })}
//             </div>
//         )
//     }
// }