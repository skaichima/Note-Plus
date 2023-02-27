import React,{Component} from "react";
import { MdSearch } from "react-icons/md";

class Search extends Component {
    render() {
        return(
            <div className="flex items-center bg-slate-300 rounded-xl p-2 mb-6">
                <MdSearch className="" size='1.3em' />
                <input 
                    onChange={(event) => 
                        this.props.handleSearchNote(event.target.value)
                    } 
                    type="text" 
                    className="border-0 md:text-xl md:py-1 w-full bg-transparent outline-none px-2" 
                    placeholder="Type to search..." 
                />
            </div>
        )
    }
}

export default Search;