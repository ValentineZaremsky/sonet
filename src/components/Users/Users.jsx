import React from 'react';
import * as axios from 'axios';
import css from './Users.module.css';

class Users extends React.Component {

  componentDidMount() {
    axios
    .get(`https://randomuser.me/api/?seed=kamasutra&results=${this.props.pageSize}&page=${this.props.currentPage}`)
    .then(response => { this.props.setUsers(response.data.results); });
  }

  onPageChange = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
    .get(`https://randomuser.me/api/?seed=kamasutra&results=${this.props.pageSize}&page=${pageNumber}`)
    .then(response => { this.props.setUsers(response.data.results); });
  }

  render() {
    let pagesCount = Math.ceil(this.props.usersCount / this.props.pageSize);
    let pages = [];
    // for (let p = Math.max(this.props.currentPage - 5, 1); p <= Math.max(1, Math.min(this.props.currentPage + 5, pagesCount)); p++) {
    for (let p = 1; p <= pagesCount; p++) {
      pages.push(p);
    }

    return (
      <div className={css.usersPage}>
        <div className={css.pageLinks}>
          {
            pages.map((p) => {
              return (
                <span
                  className={`${css.pageNumber} ${this.props.currentPage === p ? css.selected : ''}`}
                  onClick={(e) => {this.onPageChange(p)}} key={p}>
                    {p}
                </span>
              )
            })
          }
        </div>

        {
          this.props.users.map( u =>
            <div className={css.user} key={u.id.value + u.name.last}>
              <div className={css.leftSide}>
                <div>
                  <img className={css.avatar} src={u.picture.medium} alt="Avatar" />
                </div>
                <div>
                  {
                    u.followed
                      ? <button onClick={() => {this.props.unfollowUser(u.id)}}>Unfollow</button>
                      : <button onClick={() => {this.props.followUser(u.id)}}>Follow</button>
                  }
                </div>
              </div>
              <div className={css.rightSide}>
                <div className={css.info}>
                  <div className={css.name}>{u.name.first} {u.name.last}</div>
                  <div className={css.email}>{u.email}</div>
                </div>
                <div className={css.location}>
                  <div>{u.location.country}</div>
                  <div>{u.location.city}</div>
                </div>
              </div>
            </div>
          )
        }
      </div>
    )
  }
}

export default Users;
