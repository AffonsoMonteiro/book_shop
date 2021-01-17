import styled from 'styled-components'


export const ListBook = styled.ul ` 
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    list-style: none;
    margin: 30px;
    

    li { 
        display: flex;
        flex-direction: column;
        background-color: #fff;
        border-radius: 4px;
        padding: 20px;

       
        img {
            max-width: 250px;   
            
            align-self: center;        
        }

        > strong {
            font-size: 15px;
            line-height: 20px;
            color: #333;
            margin-top: 5px;
        }

        > span {
            font-size: 20px;
            font-weight: bold;
            margin: 5px 0 20px;
        }

        button {
            background: #573BA3;
            color: #FFF;
            border: none;
            border-radius: 5px;
            overflow: hidden;
            margin-top: auto;

            display: flex;
            align-items: center;
            transition: all .3s;

            &:hover {
                opacity: 0.9;
            }

            .CartIcon {
                display: flex;
                align-items: center;
                padding: 12px;

                svg {
                    margin-right: 5px;
                }
            }

        }
    }
`