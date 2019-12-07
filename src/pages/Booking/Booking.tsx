import React from 'react';
import styled from 'styled-components';

import Seat from '../../components/Seat';
import { theme } from '../../styles/theme';
import TicketType from '../../components/TicketType';
import TicketStatus from '../../components/TicketStatus';
import { connect } from 'react-redux';
import { ISeatState } from '../../store/seat/reducers';
import { ISeat } from '../../models/seat';
import {
  fetchSeats,
  IFetchSeats,
  ISelectSeat,
  selectSeat,
  ISelectSeatPayload
} from '../../store/seat/actions';
import { ITicketTypes } from '../../models/ticket-type';
import Zoom from '../../components/Zoom';
import { IMovie } from '../../models/movie';
import MovieInfo from '../../components/MovieInfo';
import { formatCurrency } from '../../utils/number';
import { Currency } from '../../utils/consts';
import Icon from '../../components/Icon';

interface IDispatchProps {
  fetchSeats: () => IFetchSeats;
  selectSeat: (payload: ISelectSeatPayload) => ISelectSeat;
}

interface IStateProps {
  movie: IMovie | null;
  seats: ISeat[];
  ticketTypes: ITicketTypes[];
  totalPrice: number;
  loading: boolean;
}

type IProps = IDispatchProps & IStateProps;

interface IState {
  zoom: number;
}

const ZoomDefault = 1;
const MaxZoom = 2;
const MinZoom = 0.5;
class Booking extends React.PureComponent<IProps, IState> {
  state: IState = {
    zoom: ZoomDefault
  };

  componentDidMount() {
    this.props.fetchSeats();
  }

  onSelectSeat = (payload: ISelectSeatPayload) => this.props.selectSeat(payload);
  onZoomIn = () => this.state.zoom > MinZoom && this.setState({ zoom: this.state.zoom - 0.1 });
  onZoomOut = () => this.state.zoom < MaxZoom && this.setState({ zoom: this.state.zoom + 0.1 });

  renderSubmit = () => {
    const { movie, totalPrice } = this.props;

    return (
      <SubmitContainer>
        <SubmitContent>
          <div>
            <p>{movie?.cinema}</p>
            <p>{movie?.time}</p>
          </div>
          <PriceContainer>
            <Price>
              {formatCurrency(totalPrice, false)}
              <span>{Currency}</span>
            </Price>
            <Icon name="info" />
          </PriceContainer>
        </SubmitContent>
        <ButtonContainer>
          <Button>Chọn combo</Button>
          <Button>Thanh toán</Button>
        </ButtonContainer>
      </SubmitContainer>
    );
  };

  render() {
    const { seats, ticketTypes, movie } = this.props;
    const { zoom } = this.state;

    return (
      <Container>
        <Content>
          <MovieInfo movie={movie} />

          <Seat zoom={zoom} seats={seats} onSelect={this.onSelectSeat} />

          <Footer>
            <Zoom onZoomIn={this.onZoomIn} onZoomOut={this.onZoomOut} />
            <TicketStatus />
            <TicketType types={ticketTypes} />
          </Footer>
        </Content>

        {this.renderSubmit()}
      </Container>
    );
  }
}

const Container = styled.div`
  margin: 0 auto;
  max-width: 900px;
  background-color: ${theme.colors.black};
  width: 100%;
  height: 100vh;
  position: relative;
`;

const Content = styled.div`
  max-height: calc(100vh - 90px);
  overflow: scroll;
`;

const Footer = styled.div`
  display: flex;
  margin-top: 20px;
  padding: 20px;
  padding-bottom: 50px;
`;

const SubmitContainer = styled.div`
  height: 120px;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: ${theme.colors.white};
`;

const SubmitContent = styled.div`
  display: flex;
  padding: 10px 20px 0;
  align-items: flex-start;
  justify-content: space-between;

  p {
    margin: 0;
    margin-bottom: 10px;
  }
`;

const Price = styled.h1`
  text-align: right;
  margin: 0;
  margin-right: 5px;

  span {
    font-size: 14px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 20px;
`;

const Button = styled.button`
  outline: none;
  text-align: center;
  cursor: pointer;
  color: ${theme.colors.white};
  height: 40px;
  padding: 0 25px;
  font-weight: 500;
  font-size: 16px;
  background-color: ${theme.colors.black};
  border: 0;
  &:focus {
    outline: none;
  }
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`;

const mapStateToProps = (state: { seat: ISeatState }) => ({
  movie: state.seat.movie,
  seats: state.seat.seats,
  ticketTypes: state.seat.ticketTypes,
  totalPrice: state.seat.totalPrice,
  loading: state.seat.loading
});

const mapDispatchToProps = {
  fetchSeats,
  selectSeat
};

export default connect(mapStateToProps, mapDispatchToProps)(Booking);
