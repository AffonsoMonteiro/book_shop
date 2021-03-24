import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div `
    padding: 30px;
    background: #FFF;
    margin: 30px 80px;
    border-radius: 5px;

   @media (max-width: 460px) {
       margin: 0;
   }

    footer {
        margin-top: 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        @media (max-width: 520px) {
            flex-direction: column-reverse;
            
        }


        button {
            background: #573BA3;
            color: #FFF;
            font-weight: bold;
            border: none;
            border-radius: 5px;
            padding: 15px 50px;
            text-transform: uppercase;
            transition: all ease .3s;

            @media (max-width: 520px) {
                margin-top: 20px;
                width: 100%;
                padding: 20px;
            }

            &:hover {
                opacity: 0.9;
            }
        }

        .total {
            display: flex;
            align-items: baseline;
            flex-direction: column;

            span{
                color: #888;
                font-weight: bold;
            }

            strong {
                font-size: 26px;
                margin-left: 5px;
            }

            @media (max-width: 768px) {

                strong {
                    font-size: 20px;
                }
            }

            @media (max-width: 460px) {
                

                span {
                    font-size: 14px;
                }

                strong {
                    font-size: 18px;
                }
            }
        }
    }
`


export const CardProduct = styled.table `
    width: 100%;
    border-collapse: collapse;

    thead {
        @media (max-width: 640px) {
            display: none;
        }
    }

    thead th {
        color: #888;
        text-align: left;

        padding: 12px;

        &:nth-child(3) {
            text-align: center;
        }
    }

    tbody tr {
        border-bottom: 1px solid #eee;

        @media (max-width: 640px) {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
        }
    }

    tbody td {
        padding: 12px;
        
        &:first-child {
            @media (max-width: 640px) {
                padding-left: 0;
                padding-bottom: 0;
            }        
        }

        &:nth-child(2) {
        @media (max-width: 640px) {
        flex: 1 1 60%;
      }

      @media (max-width: 385px) {
        flex: 1;
      }

      span {
        @media (max-width: 640px) {
          font-size: 14px;
          color: #666;
        }
      }
    }

    &:nth-child(3),
    &:nth-child(4),
    &:nth-child(5) {
      @media (max-width: 640px) {
        padding-top: 0;
        padding-bottom: 0;
      }
    }

    &:nth-child(3) {
      @media (max-width: 640px) {
        padding: 0;
      }

     
      @media (max-width: 356px) {
        flex: 1;

        div {
          justify-content: flex-start;
        }
      }
    }

    &:nth-child(4) {
      @media (max-width: 640px) {
        flex: 1;
        text-align: center;
        font-size: 16px;
      }

      @media (max-width: 356px) {
        display: none;
      }
    }

    &:nth-child(5) {
      @media (max-width: 640px) {
        padding: 12px 0;
      }
    }
}

    
    img {
        height:100px;
        
    }

    strong {
    display: block;
    color: #333;
  }

  span {
    display: block;
    margin-top: 4px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    input {
      border: 1px solid #ddd;
      border-radius: 3px;
      color: #666;
      padding: 6px;
      width: 50px;
      text-align: center;

      @media (max-width: 640px) {
        width: 36px;
      }
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px 8px;

    svg {
      @media (max-width: 640px) {
        width: 24px;
        height: 24px;
      }
    }
  }
` 


export const EmptyCart = styled.div `
    min-height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    

  @media (max-width: 560px) {
    min-height: 500px;
  }

  svg {
    font-size: 260px;
    color: #f3f3f6;
    position: absolute;
  }

  div {
    z-index: 1;
    text-align: center;

    h2 {
      font-size: 56px;
    }

    p {
      margin: 12px 0 28px;
      font-size: 16px;
    }
  }
`

export const StartShopping = styled(Link) `
    background: #7159c1;
    color: #fff;
    border: 0;
    border-radius: 4px;
    padding: 12px 20px;
    font-weight: bold;
    text-transform: uppercase;
    transition: .3s ease-in-out;
    text-decoration: none;
    display: inline-block;

   &:hover {
       opacity: .9;
   }
`