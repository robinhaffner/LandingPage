#!/bin/bash

rsync --cvs-exclude -rvz -O -t --exclude-from 'exclude.txt' --delete . robin.haffner@s00wbi020v:/var/www/vhosts/int.coursepage.pslgroup.com