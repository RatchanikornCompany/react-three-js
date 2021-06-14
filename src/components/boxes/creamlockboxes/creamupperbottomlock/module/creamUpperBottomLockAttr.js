import * as THREE from 'three';

import { material } from '../../../../.modules/material';

import {
  getPlaneASideShape,
  getPlaneABackShape,
  getPlaneBSideShape,
  getPlaneBBackShape,
  getPlaneTopShape,
  getPlaneBottomShape,
  getLidCover,
  getLidCoverD,
  getLLid,
  getRLid,
  getGlueLid,
} from '../../../../.modules/models';
import {
  getLockTopShape,
  getLockBottomShape,
  getLidLockTopShape,
  getLidLockBottomShape,
  getPlaneLockTopShape,
  getPlaneLockBottomShape,
  getLLidLock,
getRLidLock
} from '../../creamsinglelock/module/creamSingleLockModel';
import { foldBox } from './creamUpperBottomLockAnim';

export const creamUpperBottomLockModel = (
  A,
  B,
  C,
  R,
  O,
  G,
  GSlope,
  animate,
  materialColor
) => {
  const F = 30, //? ลิ้นกันฝุ่น ค่า Defualt  (A / 100) * F
    P = 15, //? ลิ้นเสียบ ค่า Defualt
    LockHeight = 15, //? ความสูงฐานล็อค
    lockSlope = 5,
    plugLength = 15;

  const sideABack = new THREE.Mesh(
    getPlaneASideShape(A, C),
    material(O, materialColor)
  );
  sideABack.castShadow = true;

  const sideTop = new THREE.Mesh(
    getPlaneTopShape(A, B, plugLength),
    material(O, materialColor)
  );
  sideTop.castShadow = true;

  const sideTopLid = new THREE.Mesh(
    getLidCover(A, B, P, plugLength),
    material(O, materialColor)
  );
  sideTopLid.castShadow = true;

  const sideATop = new THREE.Mesh(
    getLockBottomShape(A, B),
    material(O, materialColor)
  );
  sideATop.castShadow = true;
  sideATop.rotation.z = Math.PI

  const sideTopLockLid = new THREE.Mesh(
    getPlaneLockTopShape(A, B, R),
    material(O, materialColor)
  );
  sideTopLockLid.castShadow = true;
  sideTopLockLid.rotation.z = Math.PI;

  const sideLRTopLeftLock = new THREE.Mesh(
    getRLidLock(B, LockHeight, lockSlope),
    material(O, materialColor)
  );
  sideLRTopLeftLock.castShadow = true;

  const sideLRTopRightLock = new THREE.Mesh(
    getLLidLock(B, LockHeight,lockSlope),
    material(O, materialColor)
  );
  sideLRTopRightLock.castShadow = true;

  const sideTopLock = new THREE.Mesh(
    getLidLockTopShape(A, LockHeight, lockSlope),
    material(O, materialColor)
  );
  sideTopLock.castShadow = true;
  sideTopLock.rotation.set(Math.PI, Math.PI, 0);

  const sideBottom = new THREE.Mesh(
    getPlaneBottomShape(A, B, plugLength),
    material(O, materialColor)
  );
  sideBottom.castShadow = true;

  const sideBottomLid = new THREE.Mesh(
    getLidCoverD(A, B, P, plugLength),
    material(O, materialColor)
  );
  sideBottomLid.castShadow = true;

  const sideABottom = new THREE.Mesh(
    getLockTopShape(A, B),
    material(O, materialColor)
  );
  sideABottom.castShadow = true;
  sideABottom.rotation.z = Math.PI;

  const sideLockLid = new THREE.Mesh(
    getPlaneLockBottomShape(A, B, R),
    material(O, materialColor)
  );
  sideLockLid.castShadow = true;
  sideLockLid.rotation.set(Math.PI, Math.PI, 0);

  const sideLRLeftLock = new THREE.Mesh(
    getLLidLock(B, LockHeight,lockSlope),
    material(O, materialColor)
  );
  sideLRLeftLock.castShadow = true;
  sideLRLeftLock.rotation.z = Math.PI

  //TODO
  const sideLRRightLock = new THREE.Mesh(
    getRLidLock(B, LockHeight,lockSlope),
    material(O, materialColor)
  );
  sideLRRightLock.castShadow = true;
  sideLRRightLock.rotation.z = Math.PI;

  const sideBottomLock = new THREE.Mesh(
    getLidLockBottomShape(A, LockHeight, lockSlope),
    material(O, materialColor)
  );
  sideBottomLock.castShadow = true;
  sideBottomLock.rotation.set(Math.PI, Math.PI, 0);

  const sideBLeft = new THREE.Mesh(
    getPlaneBBackShape(B, C),
    material(O, materialColor)
  );
  sideBLeft.castShadow = true;

  const sideLidBLeft = new THREE.Mesh(
    getLLid(A, B, F),
    material(O, materialColor)
  );
  sideLidBLeft.castShadow = true;

  const sideLidBLeftD = new THREE.Mesh(
    getLLid(A, B, F),
    material(O, materialColor)
  );
  sideLidBLeftD.castShadow = true;
  sideLidBLeftD.rotation.z = Math.PI;

  const sideBRight = new THREE.Mesh(
    getPlaneBSideShape(B, C),
    material(O, materialColor)
  );
  sideBRight.castShadow = true;

  const sideLidBRight = new THREE.Mesh(
    getRLid(A, B, F),
    material(O, materialColor)
  );
  sideLidBRight.castShadow = true;

  const sideLidBRightD = new THREE.Mesh(
    getRLid(A, B, F),
    material(O, materialColor)
  );
  sideLidBRightD.castShadow = true;
  sideLidBRightD.rotation.z = Math.PI;

  const sideAFront = new THREE.Mesh(
    getPlaneABackShape(A, C),
    material(O, materialColor)
  );
  sideAFront.castShadow = true;

  const sideGlueLid = new THREE.Mesh(
    getGlueLid(C, G, GSlope),
    material(O, materialColor)
  );
  sideGlueLid.castShadow = true;
  sideGlueLid.rotation.z = Math.PI / 2;

  let edges = new THREE.EdgesGeometry(getPlaneASideShape(A, C));
  const sideABackEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getPlaneTopShape(A, B, plugLength));
  const sideTopEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLidCover(A, B, P, plugLength));
  const sideTopLidEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLockBottomShape(A, B));
  const sideATopEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideATopEdges.rotation.z = Math.PI;

  edges = new THREE.EdgesGeometry(getPlaneLockTopShape(A, B, R));
  const sideTopLockLidEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideTopLockLidEdges.rotation.z = Math.PI;

  edges = new THREE.EdgesGeometry(getRLidLock(B, LockHeight,lockSlope));
  const sideLRTopLeftLockEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLLidLock(B, LockHeight,lockSlope));
  const sideLRTopRightLockEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(
    getLidLockTopShape(A, LockHeight, lockSlope)
  );
  const sideTopLockEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideTopLockEdges.rotation.set(Math.PI, Math.PI, 0);

  edges = new THREE.EdgesGeometry(getPlaneBottomShape(A, B, plugLength));
  const sideBottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLidCoverD(A, B, P, plugLength));
  const sideBottomLidEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLockTopShape(A, B));
  const sideABottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideABottomEdges.rotation.z = Math.PI;

  edges = new THREE.EdgesGeometry(getPlaneLockBottomShape(A, B, R));
  const sideLockLidEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLockLidEdges.rotation.set(Math.PI, Math.PI, 0);

  edges = new THREE.EdgesGeometry(getLLidLock(B, LockHeight,lockSlope));
  const sideLRLeftLockEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLRLeftLockEdges.rotation.z = Math.PI

  edges = new THREE.EdgesGeometry(getRLidLock(B, LockHeight,lockSlope));
  const sideLRRightLockEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLRRightLockEdges.rotation.z = Math.PI;

  edges = new THREE.EdgesGeometry(
    getLidLockBottomShape(A, LockHeight, lockSlope)
  );
  const sideBottomLockEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideBottomLockEdges.rotation.set(Math.PI, Math.PI, 0);

  edges = new THREE.EdgesGeometry(getPlaneBBackShape(B, C));
  const sideBLeftEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLLid(A, B, F));
  const sideLidBLeftEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLLid(A, B, F));
  const sideLidBLeftDEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLidBLeftDEdges.rotation.z = Math.PI;

  edges = new THREE.EdgesGeometry(getPlaneBSideShape(B, C));
  const sideBRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getRLid(A, B, F));
  const sideLidBRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getRLid(A, B, F));
  const sideLidBRightDEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLidBRightDEdges.rotation.z = Math.PI;

  edges = new THREE.EdgesGeometry(getPlaneABackShape(A, C));
  const sideAFrontEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getGlueLid(C, G, GSlope));
  const sideGlueLidEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideGlueLidEdges.rotation.z = Math.PI / 2;

  const pivotLockTopLeft = new THREE.Object3D();
  pivotLockTopLeft.add(sideLRTopLeftLock, sideLRTopLeftLockEdges);
  pivotLockTopLeft.position.x = -A;

  const pivotLockTopRight = new THREE.Object3D();
  pivotLockTopRight.add(sideLRTopRightLock, sideLRTopRightLockEdges);

  const pivotLockTop = new THREE.Object3D();
  pivotLockTop.add(sideTopLock, sideTopLockEdges);
  pivotLockTop.position.y = (B * 0.97) | 0;

  const pivotLockTopLid = new THREE.Object3D();
  pivotLockTopLid.add(
    sideTopLockLid,
    sideTopLockLidEdges,
    pivotLockTopLeft,
    pivotLockTopRight,
    pivotLockTop
  );
  pivotLockTopLid.position.y = (B / 2) | 0;

  const pivotTopLid = new THREE.Object3D();
  pivotTopLid.add(sideTopLid, sideTopLidEdges);
  pivotTopLid.position.y = B;

  const pivotTop = new THREE.Object3D();
  pivotTop.add(sideTop, sideTopEdges, pivotTopLid);
  pivotTop.position.y = C;

  const pivotATop = new THREE.Object3D();
  pivotATop.add(sideATop, sideATopEdges, pivotLockTopLid);
  pivotATop.position.y = C;

  const pivotBottomLid = new THREE.Object3D();
  pivotBottomLid.add(sideBottomLid, sideBottomLidEdges);
  pivotBottomLid.position.y = -B;

  const pivotBottom = new THREE.Object3D();
  pivotBottom.add(sideBottom, sideBottomEdges, pivotBottomLid);

  const pivotBottomLeft = new THREE.Object3D();
  pivotBottomLeft.add(sideLRLeftLock, sideLRLeftLockEdges);
  pivotBottomLeft.position.x = -A;

  const pivotBottomRight = new THREE.Object3D();
  pivotBottomRight.add(sideLRRightLock, sideLRRightLockEdges);

  const pivotBottomLock = new THREE.Object3D();
  pivotBottomLock.add(sideBottomLock, sideBottomLockEdges);
  pivotBottomLock.position.y = -(B+2) | 0;

  const pivotLockBottomLid = new THREE.Object3D();
  pivotLockBottomLid.add(
    sideLockLid,
    sideLockLidEdges,
    pivotBottomLeft,
    pivotBottomRight,
    pivotBottomLock
  );
  pivotLockBottomLid.position.y = -(B / 2) | 0;

  const pivotABottom = new THREE.Object3D();
  pivotABottom.add(sideABottom, sideABottomEdges, pivotLockBottomLid);

  const pivotBack = new THREE.Object3D();
  pivotBack.add(sideABack, sideABackEdges, pivotTop, pivotBottom);

  const pivotGlueLid = new THREE.Object3D();
  pivotGlueLid.add(sideGlueLid, sideGlueLidEdges);
  pivotGlueLid.position.x = -A;

  const pivotFront = new THREE.Object3D();
  pivotFront.add(
    sideAFront,
    sideAFrontEdges,
    pivotGlueLid,
    pivotATop,
    pivotABottom
  );
  pivotFront.position.x = -B;

  const pivotLeftLid = new THREE.Object3D();
  pivotLeftLid.add(sideLidBLeft, sideLidBLeftEdges);
  pivotLeftLid.position.y = C;

  const pivotLeftLidD = new THREE.Object3D();
  pivotLeftLidD.add(sideLidBLeftD, sideLidBLeftDEdges);
  pivotLeftLidD.position.x = -B;

  const pivotLeft = new THREE.Object3D();
  pivotLeft.add(
    sideBLeft,
    sideBLeftEdges,
    pivotLeftLid,
    pivotLeftLidD,
    pivotFront
  );

  const pivotRightLid = new THREE.Object3D();
  pivotRightLid.add(sideLidBRight, sideLidBRightEdges);
  pivotRightLid.position.y = C;

  const pivotRightLidD = new THREE.Object3D();
  pivotRightLidD.add(sideLidBRightD, sideLidBRightDEdges);
  pivotRightLidD.position.x = B;

  const pivotRight = new THREE.Object3D();
  pivotRight.add(sideBRight, sideBRightEdges, pivotRightLid, pivotRightLidD);
  pivotRight.position.x = A;

  const pivotAll = new THREE.Object3D();
  pivotAll.add(pivotBack, pivotRight, pivotLeft);

  if (animate) {
    foldBox(
      pivotLeft,
      pivotLeftLid,
      pivotLeftLidD,
      pivotRight,
      pivotRightLid,
      pivotRightLidD,
      pivotFront,
      pivotGlueLid,
      pivotATop,
      pivotLockTopLid,
      pivotLockTop,
      pivotLockTopLeft,
      pivotLockTopRight,
      pivotTop,
      pivotTopLid,
      pivotABottom,
      pivotLockBottomLid,
      pivotBottomLock,
      pivotBottomLeft,
      pivotBottomRight,
      pivotBottom,
      pivotBottomLid
    );
  }

  return pivotAll;
};
